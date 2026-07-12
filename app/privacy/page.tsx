import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import fs from 'node:fs';
import path from 'node:path';
import { site } from '@/content/copy';
import { Nav } from '@/components/Nav';

export const metadata: Metadata = {
  title: `Privacy · ${site.name}`,
};

// The policy text lives in content/privacy.md — the single source of truth,
// also linked by the iOS app's paywall and the App Store listing. Edit the
// markdown, not this file. Rendered at build time (static export), with a
// minimal parser instead of a markdown dependency: the policy only uses
// headings, paragraphs, lists, bold, and links.

/** Inline markdown: [text](url) links and **bold**. */
function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      nodes.push(
        <a key={key++} href={match[2]}>
          {match[1]}
        </a>
      );
    } else {
      nodes.push(<strong key={key++}>{match[3]}</strong>);
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Block markdown: #/## headings, "- " lists, paragraphs. */
function renderBlocks(markdown: string): ReactNode[] {
  const blocks = markdown.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    if (block.startsWith('## ')) return <h2 key={i}>{renderInline(block.slice(3))}</h2>;
    if (block.startsWith('# ')) return <h1 key={i}>{renderInline(block.slice(2))}</h1>;
    if (block.split('\n').every((line) => line.startsWith('- '))) {
      return (
        <ul key={i}>
          {block.split('\n').map((line, j) => (
            <li key={j}>{renderInline(line.slice(2))}</li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{renderInline(block.replace(/\n/g, ' '))}</p>;
  });
}

export default function Privacy() {
  const markdown = fs.readFileSync(
    path.join(process.cwd(), 'content', 'privacy.md'),
    'utf8'
  );
  return (
    <main className="page">
      <Nav brand />
      {renderBlocks(markdown)}
    </main>
  );
}
