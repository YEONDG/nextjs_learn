import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "soccer",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDZfMzkg%2FMDAxNjUxODM0MjMwNzEz.6lNWud5bZUNjT6UGMGXCu-f-2hQSIiiypvhjZ05WR80g.uJBS5g_gANS1Hie9vQhQvpAsDa7eGW29Z7nmGKONkHgg.JPEG.kmseo12%2F20220505%25A3%25DF171634.jpg&type=sc960_832",
    address: "some address 1",
    description: "this is first meetup",
  },
  {
    id: "m2",
    title: "two",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDZfMzkg%2FMDAxNjUxODM0MjMwNzEz.6lNWud5bZUNjT6UGMGXCu-f-2hQSIiiypvhjZ05WR80g.uJBS5g_gANS1Hie9vQhQvpAsDa7eGW29Z7nmGKONkHgg.JPEG.kmseo12%2F20220505%25A3%25DF171634.jpg&type=sc960_832",
    address: "some address 2",
    description: "this is two meetup",
  },
  {
    id: "m3",
    title: "three",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDZfMzkg%2FMDAxNjUxODM0MjMwNzEz.6lNWud5bZUNjT6UGMGXCu-f-2hQSIiiypvhjZ05WR80g.uJBS5g_gANS1Hie9vQhQvpAsDa7eGW29Z7nmGKONkHgg.JPEG.kmseo12%2F20220505%25A3%25DF171634.jpg&type=sc960_832",
    address: "some address 3",
    description: "this is three meetup",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
