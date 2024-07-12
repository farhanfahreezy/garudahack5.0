var date = new Date()
date.setHours(date.getHours()-2)

export default function useInsightList() {
    const dataInsight1: HomeCardInsightProps = {
        title: "Local",
        imageUrl: "public/home_insight/insight1.png",
        url: "home/insight/1",
        author: "Jane Ostin",
        createdDate: new Date()
    };

    const dataInsight2: HomeCardInsightProps = {
        title: "Local",
        imageUrl: "public/home_insight/insight2.png",
        url: "home/insight/2",
        author: "Dani Olmo",
        createdDate: new Date()
    };

    const dataInsight3: HomeCardInsightProps = {
        title: "Local",
        imageUrl: "public/home_insight/insight3.png",
        url: "home/insight/3",
        author: "Dani Olmo",
        createdDate: new Date()
    };

    const dataInsight4: HomeCardInsightProps = {
        title: "Local",
        imageUrl: "public/home_insight/insight4.png",
        url: "home/insight/4",
        author: "Ian Maatsen",
        createdDate: new Date()
    };

    const dataInsight5: HomeCardInsightProps = {
        title: "Local",
        imageUrl: "public/home_insight/insight5.png",
        url: "home/insight/5",
        author: "Martin Paes",
        createdDate: new Date()
    };

  
    const dataInsightList: HomeCardInsightListProps = {
      HomeCardsInsight: [
        dataInsight1,
        dataInsight2,
        dataInsight3,
        dataInsight4,
        dataInsight5
      ],
    };
  
    return dataInsightList;
  }
  