import TweetEmbed from "react-tweet-embed";

const Tweet = ({ id }: { id: string }) => {
  return <TweetEmbed tweetId={id} />;
};

export default Tweet;
