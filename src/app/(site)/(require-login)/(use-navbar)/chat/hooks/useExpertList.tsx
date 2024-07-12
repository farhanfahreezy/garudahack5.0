export default function useExpertList() {
  const dataExpert1: ExpertCardProps = {
    name: "Dr. Ferdinant Sinaga",
    expertise: "Child Psychologist",
    rating: 4.9,
    price: 22000,
    url: "/detail-chat/1",
    profilePictureUrl: "/expert/sinaga.png",
  };
  const dataExpert2: ExpertCardProps = {
    name: "Gempita Hampa",
    expertise: "Paham Psychologist",
    rating: 4.2,
    price: 65000,
    url: "/detail-chat/2",
    profilePictureUrl: "/expert/kagem.jpg",
  };
  const dataExpert3: ExpertCardProps = {
    name: "Sydney Sweeney",
    expertise: "Psychologist",
    rating: 5,
    price: 9000000,
    url: "/detail-chat/2",
    profilePictureUrl: "/expert/sydney.jpg",
  };

  const dataExpert4: ExpertCardProps = {
    name: "Homelander",
    expertise: "Supe-psychologist",
    rating: 5,
    price: 50000,
    url: "/detail-chat/2",
    profilePictureUrl: "/expert/homelander.jpg",
  };

  const dataExpert5: ExpertCardProps = {
    name: "Alex Turner",
    expertise: "Child Psychologist",
    rating: 5,
    price: 42000,
    url: "/detail-chat/2",
    profilePictureUrl: "/expert/alex.jpg",
  };

  const dataExpert6: ExpertCardProps = {
    name: "Aubrey Graham",
    expertise: "Child Psychologist",
    rating: 2.1,
    price: 700000,
    url: "/detail-chat/2",
    profilePictureUrl: "/expert/aubrey.jpg",
  };

  const dataExpertList: ExpertCardListProps = {
    expertCards: [
      dataExpert1,
      dataExpert2,
      dataExpert3,
      dataExpert4,
      dataExpert5,
      dataExpert6,
      dataExpert2,
      dataExpert3,
      dataExpert4,
      dataExpert1,
      dataExpert2,
      dataExpert3,
      dataExpert4,
      dataExpert5,
      dataExpert6,
      dataExpert2,
      dataExpert3,
      dataExpert4,
    ],
  };

  return dataExpertList;
}
