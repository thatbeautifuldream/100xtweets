import { Tweet } from "react-tweet";

const tweetIds = ["1758878606443343936", "1758859019949625560"];

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      {tweetIds.map((tweetId) => (
        <Tweet key={tweetId} id={tweetId} />
      ))}
    </div>
  );
}
