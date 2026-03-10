import { ZAxis } from "recharts";

export interface VirusEffect {
  prompt: string;
  activation: string;
}

export const regularPrompts: string[] = [
  "_ if you've ever posted a cringy selfie on social media, take a penalty.",
  "_ give a wild dare to _, if they complete it, give out 2 penalties.",
  "The player who's had the most embarrassing public moment gives out 3 penalties.",
  "_ judge players who've traveled to fewer countries than _, they take 2 penalties.",
  "If you ever owned a pet rock, take a penalty (one per rock).",
  "_ do your best opera singing for 5 seconds or take 3 penalties.",
  "_ purr like a cat for 5 seconds or take a penalty.",
  "_ give _ your best compliment in a funny accent or take 3 penalties.",
  "Give out 2 penalties to players you think are more chaotic than you. If none, take 2 yourself.",
  "Moonwalk around the room or take 2 penalties.",
  "Players with glasses take a penalty.",
  "If you've ever sent a text to the wrong person, take a penalty.",
  "The first person to do 10 jumping jacks can give a MAXIMUM PENALTY.",
  "Take a penalty if the last show you binged was a reality TV show.",
  "Players taller than _ take a penalty.",
  "_ name 2 reasons why _ would survive the longest on a desert island, if you can't, take 2 penalties. If you can, give out 2.",
  "Vote for the player with the loudest laugh; winner takes a penalty.",
  "_ if you can name all 7 continents in 10 seconds, give out 2 penalties, else take 2.",
  "Take a penalty if you've ever been caught talking to yourself.",
  "The player with the wildest vacation story gives out 3 penalties.",
  "Close your eyes and guess each player by their handshake. Take a penalty for each miss.",
  "_ do your best robot dance or take a penalty.",
  "The first person to high-five _ gives out 2 penalties.",
  "The first person to touch their toes gives out 2 penalties.",
  "_ if you can name 5 Taylor Swift songs, give out 3 penalties, else take 1.",
  "Take a penalty if you haven't exercised this week.",
  "_ if you're wearing something borrowed, take 2 penalties; if not, give out 3.",
  "_ if you've ever ghosted someone, take a penalty.",
  "Everyone points at the player most likely to become famous; they take 2 penalties.",
  "_ if you've ever tripped in public, take a penalty.",
  "The tallest and shortest player thumb-wrestle; loser takes 2 penalties.",
  "Everyone who owns Crocs takes a penalty (wearing them? take 2).",
  "_ if you posted a story in the last 24 hours, take a penalty.",
  "Everyone who's gone 24 hours without their phone takes a penalty.",
  "Everyone who's binge-watched an entire season in one day takes a penalty.",
  "_ try to make _ laugh; if they laugh, they take 2 penalties.",
  "Stare-down challenge: _ vs _. First to blink takes 2 penalties.",
  "Everyone points to the person most likely to become a millionaire; they take 1 penalty per finger.",
  "Everyone points to the person most likely to go viral on the internet; they take 1 penalty per finger.",
  "Everyone points to the person most likely to cry during a movie; they take 1 penalty per finger.",
  "Everyone points to the person who is the biggest drama queen; they take 1 penalty per finger.",
  "Everyone points to the person with the most contagious laugh; they take 1 penalty per finger.",
  "Everyone points to the person who talks the most in their sleep; they take 1 penalty per finger.",
  "Everyone points to the most adventurous person; they take 1 penalty per finger.",
  "_ send a silly text to someone of _'s choice or take 3 penalties.",
  "Everyone who's been friend-zoned takes a penalty.",
  "_ if you know _, give them a high-five or take 2 penalties.",
  "_, who's more likely to win a talent show? _ or _? Winner gives out 2 penalties.",
  "Who volunteers to take 4 penalties? If no one, everyone takes 2.",
  "Girls take a penalty for every person wearing sneakers in the room.",
  "Guys take a penalty for every person wearing jewelry in the room.",
  "_ and _ compare hand sizes; the one with smaller hands takes 2 penalties.",
  "_ take a penalty for every piece of denim clothing you're wearing.",
  "The player who last ate fast food takes a penalty.",
  "Do your best animal impression of the person to your left or take 2 penalties.",
  "First player to post a goofy selfie on their story gives out a MAXIMUM PENALTY; selfie stays up till tomorrow.",
  "_ high-five every player (of the same gender) or take 2 penalties.",
  "Everyone writes a funny roast of _ on their phone. _ picks the funniest; winner gives out 2 penalties.",
  "Everyone who can wiggle their ears gives out 1 penalty; others take 1.",
  "_ imitate another player's walk; if no one guesses, take 2 penalties.",
  "Everyone, take as many penalties as people with the same birth month as you.",
  "_ hold a plank for 20 seconds; if you drop, take 2 penalties.",
  "Everyone share the oldest photo on your phone or take 2 penalties.",
  "_ spin around 10 times and try to walk in a straight line; if you fail, take 2 penalties.",
  "Everyone give _ your best funny face; they pick the funniest, winner gives out 2 penalties.",
  "Everyone give _ your best pickup line; they pick the funniest, winner gives out 2 penalties.",
];

export const circleNamingGames: string[] = [
  "Name funny animal sounds; repeat or can't think of one, take a penalty. _ starts.",
  "Name ridiculous party games; repeat or can't think of one, take a penalty. _ starts.",
  "Name weird turn-offs; first to repeat or blank takes 4 penalties. _ starts.",
  "Name things that annoy you; first to repeat or blank takes 4 penalties. _ starts.",
  "Name objects you'd find in a junk drawer; first to repeat or blank takes 4 penalties. _ starts.",
  "Name things that are sticky; first to repeat or blank takes 4 penalties. _ starts.",
  "List synonyms for 'awesome'; repeat or blank, take a penalty. _ starts.",
  "Name weird websites; first to repeat or blank takes 4 penalties. _ starts.",
  "Name famous TV show catchphrases; first to repeat or blank takes 4 penalties. _ starts.",
  "Name cringy romance movie titles; first to repeat or blank takes 4 penalties. _ starts.",
  "Name iconic movie one-liners; first to repeat or blank takes 4 penalties. _ starts.",
  "Name excuses to leave a boring party; first to repeat or blank takes 4 penalties. _ starts.",
  "Name terrible pickup lines; first to repeat or blank takes 4 penalties. _ starts.",
  "Name things that are round and bouncy; first to repeat or blank takes 4 penalties. _ starts.",
  "Name words with double letters; first to repeat or blank takes 4 penalties. _ starts.",
  "Name fruits that are messy to eat; first to repeat or blank takes 4 penalties. _ starts.",
  "Name mythical creatures; first to repeat or blank takes 4 penalties. _ starts.",
  "Name car brands that sound fancy; first to repeat or blank takes 4 penalties. _ starts.",
  "Name songs everyone knows the lyrics to; first to repeat or blank takes 4 penalties. _ starts.",
  "Name countries starting with S; first to repeat or blank takes 4 penalties. _ starts.",
  "Name sci-fi movies; first to repeat or blank takes 4 penalties. _ starts.",
  "Name places you'd love to visit; first to repeat or blank takes 4 penalties. _ starts.",
];

export const memoryChainGames: string[] = [
  "_, say 'It was a wild night...' and add 3 words. Each player repeats the story and adds 3 words. First to fail takes 3 penalties.",
  "_, say 'In my crazy bag, there is...' and list one item. Each player repeats and adds an item. First to fail takes 3 penalties.",
  "_, say 'I'm cooking a mystery dish with...' and add 1 ingredient. Each player repeats and adds one. First to fail takes 3 penalties.",
  "_, say 'For a road trip, I'm packing...' and add 1 item. Each player repeats and adds one. First to fail takes 3 penalties.",
  "_, say 'At the amusement park, I saw...' and add 1 thing. Each player repeats and adds one. First to fail takes 3 penalties.",
  "_, say 'I went to a flea market and found...' and add 1 item. Each player repeats and adds one. First to fail takes 3 penalties.",
  "_, say 'I went to a yard sale and bought...' and add 1 item. Each player repeats and adds one. First to fail takes 3 penalties.",
  "Copy the silly dance move of the previous player and add your own. First to fail takes 3 penalties.",
];

export const charadeActionJokeGames: string[] = [
  "_, mime a scene from a famous movie. First to guess gives out 2 penalties. They mime next. Stops after 3 rounds.",
  "Everyone say 'I slit the sheet, the sheet I slit, and on the slitted sheet I sit' 5 times in 6 seconds. Winners and losers take 3 penalties. _ starts.",
  "Tell a joke; if no one laughs, take a penalty. If anyone laughs, they take a penalty.",
  "_, mime a famous TikTok dance; first to guess the dance gives out 2 penalties. If no one guesses in 20 seconds, they take 2.",
  "On 3, _ tries to make everyone laugh without touching anyone. Laughers take a penalty; if no one laughs, they take 2.",
  "Say something personal, true or false. Others guess true or false. Wrong guesses take a penalty per miss.",
];

export const virusEffects: VirusEffect[] = [
  {
    prompt: "_, end every sentence with a dramatic wink or take 2 penalties.",
    activation: "_, no more winking required."
  },
  {
    prompt: "Someone make up a silly rule for _. Get creative.",
    activation: "_ is free from the silly rule."
  },
  {
    prompt: "_, speak in a whisper until further notice.",
    activation: "_, you can speak normally again."
  },
  {
    prompt: "_, you must strike a dramatic pose every time someone talks to you.",
    activation: "_, no more posing required."
  },
  {
    prompt: "_ must refer to everybody else as 'Your Majesty'.",
    activation: "_ can stop being so royal."
  },
  {
    prompt: "_ must take off their socks and shoes.",
    activation: "_, you can wear your socks and shoes again."
  },
  {
    prompt: "_, end all sentences with 'and that's on that.'",
    activation: "_, stop saying 'and that's on that.'"
  },
  {
    prompt: "_, you're on fire! Do a victory dance before each turn or take 2 penalties.",
    activation: "_, you can stop dancing."
  },
];

export const splitTheRoomQuestions: string[] = [
  "Split the room! Would you rather give up sweets or social media forever? Minority takes 2 penalties.",
  "Split the room! Would you go back to high school for $1 million? Minority takes 2 penalties.",
  "Split the room! Would you rather have free travel or free food for life? Minority takes 2 penalties.",
  "Split the room! Would you rather lose your sense of smell or your sense of taste? Minority takes 2 penalties.",
  "Split the room! Would you star in a reality TV show if no one you knew would watch? Minority takes 2 penalties.",
  "Split the room! Is karaoke fun or cringe? Minority takes 2 penalties.",
  "Split the room! Would you rather have endless energy or endless free time? Minority takes 2 penalties.",
  "Split the room! Would you rather know everyone's secrets or keep yours forever hidden? Minority takes 2 penalties.",
  "Split the room! Who's cooler? Chris Hemsworth or Ryan Reynolds? Minority takes 2 penalties.",
  "Split the room! Who's more iconic? Scarlett Johansson or Ana de Armas? Minority takes 2 penalties.",
  "Split the room! Who's more iconic? Rihanna or Beyonce? Minority takes 2 penalties.",
  "Split the room! Who'd win in a dance-off? Captain America or Black Panther? Minority takes 2 penalties.",
  "Split the room! Would you rather give up breakfast or dinner forever? Minority takes 2 penalties.",
  "Split the room! Which is better? Tequila or Rum? Minority takes 2 penalties.",
  "Split the room! Which country's food is better? Thailand or Vietnam? Minority takes 2 penalties.",
];

export const bets: string[] = [];
