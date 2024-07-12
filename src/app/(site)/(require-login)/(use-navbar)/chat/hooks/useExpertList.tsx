export default function useExpertList() {
  const dataExpert1: ExpertCardProps = {
    name: "Dr. Ferdinant Sinaga",
    expertise: "Child Psychologist",
    rating: 4.9,
    price: 22000,
    url: "/chat/1",
    profilePictureUrl: "/expert/sinaga.png",
  };
  const dataExpert2: ExpertCardProps = {
    name: "Gempita Hampa",
    expertise: "Paham Psychologist",
    rating: 4.2,
    price: 65000,
    url: "/chat/2",
    profilePictureUrl: "/expert/kagem.png",
  };

  const dataExpertList: ExperCardListProps = {
    expertCards: [
      dataExpert1,
      dataExpert2,
      dataExpert1,
      dataExpert1,
      dataExpert2,
    ],
  };

  return dataExpertList;
}
