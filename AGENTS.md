<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the portfolio as one explicitly requested scrolling experience on the index route; section anchors provide navigation without redundant pages.
- Store repeatable portfolio content in a browser-safe data module and use reusable section components so factual content stays centralized.
- Use Motion for transform/opacity entrances and respect reduced-motion preferences; keep the hero visual a bundled image rather than a fabricated product screenshot.
- Keep contact actions as verified mailto/external links without a submission form because no message-delivery service is configured.
- Retain TanStack Start, React, TypeScript, and Tailwind as the supported application stack rather than introducing Next.js.
