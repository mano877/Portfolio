"use client";

import { useEffect, useState } from "react";
import { Star, GitFork, Users, BookMarked } from "lucide-react";
import Reveal from "@/components/Reveal";

type Stats = {
  repos: number;
  followers: number;
  stars: number;
  forks: number;
};

export default function GitHubStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const userRes = await fetch("https://api.github.com/users/mano877");
        const user = await userRes.json();

        const reposRes = await fetch("https://api.github.com/users/mano877/repos?per_page=100");
        const repos = await reposRes.json();

        const stars = Array.isArray(repos) ? repos.reduce((sum: number, r: any) => sum + r.stargazers_count, 0) : 0;
        const forks = Array.isArray(repos) ? repos.reduce((sum: number, r: any) => sum + r.forks_count, 0) : 0;

        setStats({
          repos: user.public_repos ?? 0,
          followers: user.followers ?? 0,
          stars,
          forks,
        });
      } catch {
        setError(true);
      }
    }
    load();
  }, []);

  const cards = stats
    ? [
        { label: "Public Repos", value: stats.repos, icon: BookMarked },
        { label: "Followers", value: stats.followers, icon: Users },
        { label: "Total Stars", value: stats.stars, icon: Star },
        { label: "Total Forks", value: stats.forks, icon: GitFork },
      ]
    : [];

  return (
    <section className="text-white px-6 py-20 text-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">GitHub Activity</h2>
      </Reveal>

      {error && <p className="text-gray-400 text-sm">Couldn&apos;t load GitHub stats right now.</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="border border-[#224248] rounded-xl py-6 px-3 flex flex-col items-center gap-2">
                <Icon size={20} className="text-[#3EB8A9]" />
                <span className="text-2xl font-bold">{c.value}</span>
                <span className="text-xs text-gray-400">{c.label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}