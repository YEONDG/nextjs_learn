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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data from an API
//   // 요청이 들어올때마다 실행
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // 서버에서만 돌아가는 코드
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
