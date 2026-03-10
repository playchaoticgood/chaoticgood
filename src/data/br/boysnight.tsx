import { ZAxis } from "recharts";

export interface VirusEffect {
  prompt: string;
  activation: string;
}

export const regularPrompts: string[] = [
  "Everybody names one 'hear me out'. If anyone disagrees with a person's 'hear me out', that person takes a penalty.",
  "_ name the most times you've been rejected and take that many penalties.",
  "_ tell a story of you doing something embarrassing in public, or take 2 penalties.",
  "_ dm a random person of _'s choosing or take 3 penalties.",
  "_ swap shirts with the person on your left for the rest of the round or take 1 penalty.",
  "_ tell the group what your most embarrassing hobby is or take a penalty.",
  "Everyone write down the name of a celebrity you've had a crush on - reveal at the same time. If two or more are the same, all those players take 1 penalty.",
  "_ open your Instagram explore page - if there's more than 3 gym pics in the first row, take a penalty.",
  "_ name your most played song this week or take 2 penalties.",
  "Everyone show the last meme you saved on your phone or take 3 penalties.",
  "Group picks a cringey selfie pose - _ must take it and post it to their story for 10 minutes or take 3 penalties.",
  "_ make a TikTok of _'s choosing or take 3 penalties.",
  "Everyone points to the most dramatic guy in the group - he takes 1 penalty for every finger pointed at him.",
  "Must post 'Feeling cute, might delete later' on your social media or take 2 penalties.",
  "_ send 'We need to talk' to a random contact in your phone or take 3 penalties.",
  "Everybody in the group who is in a relationship, take 2 penalties.",
  "_ help one of your single friends here out. Take a picture of him and send it to someone with a funny caption.",
  "_ change your IG bio to 'living my best life' or take 2 penalties.",
  "Everybody who has been caught doing something embarrassing, take 2 penalties.",
  "Everybody who has danced in a club before, take a penalty.",
  "_ must try to chug their drink without using hands.",
  "_ let the group change your phone lock screen to any picture they want or take 2 penalties.",
  "_, show the group your Instagram and TikTok search history or take 2 penalties.",
  "_ has to let the person on their right go through their DMs for 30 seconds or take 3 penalties.",
  "Everyone who has flirted with someone while in a relationship, take 1 penalty.",
  "Everyone who would not date someone taller than them, take 1 penalty.",
  "Everyone who has cried watching a movie this month, take a penalty.",
  "_ must attempt to do their 'signature dance move' - refuse and take 2 penalties.",
  "_ must tell the group the most embarrassing thing they've done to impress someone or take 3 penalties.",
  "Everyone who has sent a cringey text they regret, take 2 penalties.",
  "Everyone who has accidentally liked an old post while stalking someone, take 3 penalties.",
  "_ film a funny video on TikTok or take 2 penalties.",
  "_ must scroll to a random contact and voice note them 'I miss you' or take 2 penalties.",
  "_ name 3 people for _ to kiss/marry/kill. If they disagree with your choices take 2 penalties."
];

export const circleNamingGames: string[] = [
  "Name famous athletes. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name anime characters. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name famous scientists. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name fighters. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name basketball players. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name football players. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name tennis players. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name F1 drivers. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name action movies. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name sports. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name cartoon characters (non-anime). If you repeat or can't think of one, take a penalty. _ starts.",
  "Name soda brands. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name fast food chains. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name rappers. If you repeat or can't think of one, take a penalty. _ starts.",
  "Name video game characters. If you repeat or can't think of one, take a penalty. _ starts."
];

export const memoryChainGames: string[] = [
  "_, say \"Once upon a time...\" and add 3 words. Taking turns, every player has to repeat the story so far and add their own 3 words. The first player to fail has to take 3 penalties.",
  "_ say \"In my suitcase, there is...\" and list one item. Taking turns, every player has to repeat the items in the suitcase and add on one new item. The first player to fail has to take 3 penalties.",
  "_, say \"I'm making a sandwich with...\" and add 1 ingredient. Taking turns, every player must repeat all ingredients so far and add one new ingredient. The first player to fail has to take 3 penalties.",
  "_, say \"For the apocalypse, I'm packing...\" and add 1 item. Taking turns, every player must repeat the list and add one new item. The first to fail takes 3 penalties.",
  "_, say \"I went to the club and saw...\" and add 1 item. Taking turns, every player must repeat the list and add one new item. The first to fail takes 3 penalties."
];

export const charadeActionJokeGames: string[] = [
  "KISS MARRY KILL: Megan Fox, Margot Robbie, Jessica Alba (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Gigi Hadid, Candice Swanepoel, Miranda Kerr (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Jennifer Lawrence, Scarlett Johansson, Ana de Armas (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Zendaya, Rihanna, Dua Lipa (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Blake Lively, Selena Gomez, Jennifer Lopez (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Mila Kunis, Natalie Portman, Elizabeth Olsen (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Hailey Bieber, Bella Hadid, Kendall Jenner (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Sophie Turner, Emilia Clarke, Anya Taylor-Joy (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Sydney Sweeney, Alexandra Daddario, Madelyn Cline (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Wonder Woman, Harley Quinn, Black Widow (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Supergirl, Catwoman, Batgirl (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Gamora, Nebula, Mantis (If _ disagrees with your list, take a penalty).",
  "KISS MARRY KILL: Jessica Rabbit, Lola Bunny, Princess Leia (If _ disagrees with your list, take a penalty)."
];

export const virusEffects: VirusEffect[] = [
  {
    prompt: "_ must say 'heyyyy buddy' at the end of every round or take a penalty for each round he does not until further notice.",
    activation: "_ you no longer have to say 'heyyyy buddy'."
  },
  {
    prompt: "_ must hold hands with the person on his right until further notice.",
    activation: "_ you can let go now."
  },
  {
    prompt: "_ must end every sentence with '...your mom' until further notice.",
    activation: "_ you can stop saying '...your mom'."
  },
  {
    prompt: "_ must refer to everyone as 'king' until further notice.",
    activation: "_ you can stop calling everyone 'king'."
  },
  {
    prompt: "_ must refer to everyone as 'boss' until further notice.",
    activation: "_ you can stop calling everyone 'boss'."
  },
  {
    prompt: "_ must flex before speaking for the rest of the game.",
    activation: "_ you no longer have to flex before speaking."
  }
];

export const splitTheRoomQuestions: string[] = [];

export const bets: string[] = [];
