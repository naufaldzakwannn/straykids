import { members } from "@/lib/members";

export default function PhotoPlaceholder({
  memberSlug,
  caption,
}: {
  memberSlug?: string;
  caption?: string;
}) {
  const member = members.find((m) => m.slug === memberSlug);
  const accent = member?.accent ?? "#8B1E2F";

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed p-4 text-center"
      style={{ borderColor: accent, backgroundColor: "#1D1D20" }}
    >
      <span className="label-tag" style={{ color: accent }}>
        Slot foto
      </span>
      <span className="text-xs text-paperdim">
        {caption ?? "Tambahkan file ke /public/images"}
      </span>
    </div>
  );
}
