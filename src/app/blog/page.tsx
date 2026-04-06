import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Morpheus blog — product updates, engineering deep dives, and AI developer tooling insights.",
};

const posts = [
  {
    slug: "v1-0-32-adaptive-intelligence",
    title: "v1.0.32: Morpheus Now Learns, Adapts, and Improves Itself",
    excerpt:
      "The biggest update yet — parallel execution, correction memory that learns from your feedback, auto-approval that eliminates repetitive prompts, and a self-improvement agent that can modify its own code.",
    date: "2026-04-06",
    tag: "Release",
    readTime: "6 min",
  },
  {
    slug: "introducing-morpheus",
    title: "Introducing Morpheus: Control Your AI Agent From Your Phone",
    excerpt:
      "We built Morpheus because we wanted to run Claude Code on any machine from anywhere — securely, with voice commands, and without leaving the couch.",
    date: "2026-03-05",
    tag: "Launch",
    readTime: "5 min",
  },
  {
    slug: "e2e-encryption",
    title: "How We Built E2E Encryption for Mobile-to-Machine AI Control",
    excerpt:
      "A deep dive into our ECDH key exchange, TweetNaCl encryption, and challenge-response pairing protocol.",
    date: "2026-03-05",
    tag: "Engineering",
    readTime: "8 min",
  },
  {
    slug: "ai-token-packs",
    title: "AI Token Packs: Use Morpheus Without a Claude Subscription",
    excerpt:
      "Not everyone has an Anthropic API key. Here's how we built a managed Claude proxy so anyone can use Morpheus.",
    date: "2026-03-05",
    tag: "Product",
    readTime: "4 min",
  },
];

export default function BlogPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          <span className="text-morpheus">&gt;</span> Blog
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-center text-zinc-400">
          Product updates, engineering stories, and AI developer tooling insights.
        </p>

        <div className="mt-16 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <article className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-morpheus-dark hover:bg-surface-hover">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-md border border-morpheus-dark bg-morpheus/10 px-2 py-0.5 font-bold text-morpheus">
                    {post.tag}
                  </span>
                  <time dateTime={post.date} className="text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-zinc-600">{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold text-zinc-200">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-medium text-morpheus">
                  Read more &rarr;
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
