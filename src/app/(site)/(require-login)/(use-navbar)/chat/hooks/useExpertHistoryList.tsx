export default function useExpertHistoryList() {
  const currentDate = new Date();

  const dataExpert1: ExpertHistoryCardProps = {
    name: "Dr. Ferdinant Sinaga",
    expertise: "Child Psychologist",
    url: "/chat/1",
    profilePictureUrl: "/expert/sinaga.png",
    consultDate: new Date(currentDate.getTime() - 10 * 24 * 60 * 60 * 1000),
    status: true,
  };
  const dataExpert2: ExpertHistoryCardProps = {
    name: "Gempita Hampa",
    expertise: "Paham Psychologist",
    url: "/chat/2",
    profilePictureUrl: "/expert/kagem.jpg",
    consultDate: new Date(currentDate.getTime() - 20 * 24 * 60 * 60 * 1000),
    status: true,
  };
  const dataExpert3: ExpertHistoryCardProps = {
    name: "Sydney Sweeney",
    expertise: "Psychologist",
    url: "/chat/2",
    profilePictureUrl: "/expert/sydney.jpg",
    consultDate: new Date(currentDate.getTime() - 60 * 1000),
    status: false,
  };

  const dataExpert4: ExpertHistoryCardProps = {
    name: "Homelander",
    expertise: "Supe-psychologist",
    url: "/chat/2",
    profilePictureUrl: "/expert/homelander.jpg",
    consultDate: new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000),
    status: true,
  };

  const dataExpert5: ExpertHistoryCardProps = {
    name: "Alex Turner",
    expertise: "Child Psychologist",
    url: "/chat/2",
    profilePictureUrl: "/expert/alex.jpg",
    consultDate: new Date(currentDate.getTime() - 60 * 24 * 60 * 60 * 1000),
    status: true,
  };

  const dataExpert6: ExpertHistoryCardProps = {
    name: "Aubrey Graham",
    expertise: "Child Psychologist",
    url: "/chat/2",
    profilePictureUrl: "/expert/aubrey.jpg",
    consultDate: new Date(currentDate.getTime() - 80 * 24 * 60 * 60 * 1000),
    status: true,
  };

  const dataExpertList: ExpertHistoryCardListProps = {
    expertHistoryCards: [
      dataExpert3,
      dataExpert1,
      dataExpert2,
      dataExpert4,
      dataExpert5,
      dataExpert6,
    ],
  };

  return dataExpertList;
}
