interface YouTubeEmbedProps {
  url: string;
}

export function YouTubeEmbed({ url }: YouTubeEmbedProps) {
  const parts = url.split("=");
  const videoId = parts[1];

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-embed flex w-full justify-center">
      <iframe
        className="w-[720px] max-sm:w-auto max-sm:h-auto h-[428px]"
        src={embedUrl}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  )
}