import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDZfMzkg%2FMDAxNjUxODM0MjMwNzEz.6lNWud5bZUNjT6UGMGXCu-f-2hQSIiiypvhjZ05WR80g.uJBS5g_gANS1Hie9vQhQvpAsDa7eGW29Z7nmGKONkHgg.JPEG.kmseo12%2F20220505%25A3%25DF171634.jpg&type=sc960_832"
      title="First Meetup"
      address="some street"
      description="this is first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  // meetup확인할 방법이 필요함 예를들어 id
  // ID가 URL에 인코드되어있음

  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDZfMzkg%2FMDAxNjUxODM0MjMwNzEz.6lNWud5bZUNjT6UGMGXCu-f-2hQSIiiypvhjZ05WR80g.uJBS5g_gANS1Hie9vQhQvpAsDa7eGW29Z7nmGKONkHgg.JPEG.kmseo12%2F20220505%25A3%25DF171634.jpg&type=sc960_832",
        id: meetupId,
        title: "First Meetup",
        address: "some street",
        description: "this is first meetup",
      },
    },
  };
}

export default MeetupDetails;
