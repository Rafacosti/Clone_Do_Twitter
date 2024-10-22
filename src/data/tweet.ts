import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 1278,
    user: user,
    body: 'O TWEET voltou!',
    image: 'https://cdna.artstation.com/p/assets/images/images/080/751/772/20241008143047/smaller_square/alariko-sin-titulo-7.jpg?1728415848',
    likeCount: 852,
    commentCount: 656,
    retweetCount: 50,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 9, 1, 10, 0, 0)
}