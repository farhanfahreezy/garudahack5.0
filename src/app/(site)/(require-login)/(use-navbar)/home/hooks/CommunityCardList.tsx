var date = new Date()
date.setHours(date.getHours()-2)

export default function useCommunityList() {
    const dataCommunity1: HomeCardCommunityProps = {
        name: "Yusi Haryanti",
        profilePictureUrl: "public/home_community/yusiH.png",
        url: "home/community/1",
        totalUpvote: 18700,
        createdDate: date,
        isAnsweredByExpert: true,
        comments: 103,
        user_type: User.CommunityMember,
        category: Category.Ask,
        tag: [Tag.BehaviorManag, Tag.NutritionAndHealth]
    };

    date.setHours(date.getHours()-2)

    const dataCommunity2: HomeCardCommunityProps = {
        name: "Dr. H. Pak Vincent",
        profilePictureUrl: "public/home_community/pakVincent.png",
        url: "home/community/2",
        totalUpvote: 18500,
        createdDate: date,
        isAnsweredByExpert: false,
        comments: 229,
        user_type: User.ParentingExpert,
        category: Category.Sharing,
        tag: [Tag.BehaviorManag, Tag.NewbornCare]
    };

    date.setHours(date.getHours()-2)

    const dataCommunity3: HomeCardCommunityProps = {
        name: "Ayu Sarina",
        profilePictureUrl: "public/home_community/ayuS.png",
        url: "home/community/3",
        totalUpvote: 98700,
        createdDate: date,
        isAnsweredByExpert: true,
        comments: 10300000,
        user_type: User.CommunityMember,
        category: Category.Ask,
        tag: [Tag.SafetyAndWB, Tag.NutritionAndHealth]
    };

    date.setHours(date.getHours()-2)

    const dataCommunity4: HomeCardCommunityProps = {
        name: "Michael Logbonya",
        profilePictureUrl: "public/home_community/michaelLog.png",
        url: "home/community/4",
        totalUpvote: 20700,
        createdDate: date,
        isAnsweredByExpert: false,
        comments: 2300,
        user_type: User.InfluentialContributor,
        category: Category.Sharing,
        tag: [Tag.MentalHealth, Tag.NewbornCare]
    };

    date.setHours(date.getHours()-2)

    const dataCommunity5: HomeCardCommunityProps = {
        name: "Kak Gem",
        profilePictureUrl: "public/home_community/KakGem.png",
        url: "home/community/5",
        totalUpvote: 2100,
        createdDate: date,
        isAnsweredByExpert: true,
        comments: 72,
        user_type: User.CommunityMember,
        category: Category.Event,
        tag: [Tag.SafetyAndWB]
    };

  
    const dataCommunityList: HomeCardCommunityListProps = {
      HomeCardsCommunity: [
        dataCommunity1,
        dataCommunity2,
        dataCommunity3,
        dataCommunity4,
        dataCommunity5
      ],
    };
  
    return dataCommunityList;
  }
  