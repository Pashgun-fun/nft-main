const HEADER_INFO = "In the summer of 2021, the street art performance “Back to the Roots” took place in North Ossetia.";
const ABOUT_PROJECT = "About the project";

const TEXT_ABOUT_PROJECT = "Street artists from all over the world have created 10 unique art objects on the sheer cliffs of the Qakhtisar Pass, forming the largest graffiti gallery in the North Caucasus.";
const READ_MORE = "Read more in the article";
const RARE = "Rare";
const VERY_RARE = "Very rare";

const AUTHORS = [
    'Stas Bags',
    'Konstantin Uzhve',
    'Tembolat Gugkaev',
    'Misha Libertee',
    'Misha Mack',
    'Misha Vert',
    'Andrey Kalugin'
]
const ART_TITLE = [
    'Сloser to the world',
    'The Viking and the Dog',
    '#KOVER',
    'Who are we?',
    'Narrative',
    'Beast Sign',
    'Epic'
]
const ART_TEXT = [
    'My work contains three parts. The first one depicts a horse, we often met these animals in Ossetia. The second is a Polaroid of our campground. On the third - a chair. Why a chair? We all have different roots, different backgrounds. But when we all meet, sit around the fire and talk, we realize that we are not so different. The chair is a symbol of equality, unity. Artwork’s  area ~ 60 m²',
    'This is a story about travel and expectations, about guests and hosts, about hospitality and generosity. A traveler in a ship is sailing to new uncharted lands. Harald the Happy, the ancient king of the northern lands, with his dog Pancake, awaits the boat on the shore. Both parties are awaiting the meeting with the great excitement. Artwork’s area ~ 28 m²',
    'I am an Armenian born in Russia. All the cultural markers that define me are united in one object - a carpet. This piece of furniture has a rich history. In the east, floors in palaces were covered with carpets; in the Caucasus, brides were stolen in them. In pre-revolutionary Russia, carpets meant wealth, while in the USSR they were hung on the walls of apartments to make it warmer and quieter. You will hardly find a person of my generation who does not have a picture against the background of the carpet.',
    'I always explore and absorb local culture with keen interest and integrate it into my artworks. Therefore, the viewer sees the patterns, ornaments and details of the Ossetian and Alanian culture woven into my artwork, in addition, the text allows the viewer to start an internal dialogue in his mind. It is this dialogue with myself that I value most in art. Artwork’s area ~ 60 m²',
    'My work is called “Narrative”. It shows how closely connected man and nature are, people living in the Caucasus in particular. How important is their stay in the highlands. They are born, live and die there. The mountains are their home, their fortress, in which they feel protected. In the work itself, the woman\'s scarf depicts a snowy peak, a glacier. The continuation of this peak -  the many rivers which are descending into the green plains that it knits. Artwork’s area ~ 120 m²',
    'In Alanya I left a golden painting - "ЗВЕRIНЫЙ ZНАК". The work is inspired by the ancient heritage - the Scythian-Siberian animal style and ornaments from the Nart epic. My plot was left to show the way to one of the steepest climbs in Qakhtisar. Artwork’s  area ~ 40 m²',
    'This is the Black Fox, which is mentioned in the Nart epic of the Ossetians. This mystical character is on the one hand the trigger of a long philosophical parable, and on the other -  the key to solving an insoluble situation. The graphic image is an author’s attempt to look inside such a curious phenomenon. Artwork’s area ~ 45 m²'
]

const IDEOLOGY_OF_PROJECT = "Ideology of the project";
const TEXT_IDEOLOGY_OF_PROJECT = "On the back side of each stone, we captured a part of history that is closely connected with North Ossetia and our performance.";
const RARE_STONE = "On stones of common rarity, one can read interesting facts about North Ossetia and our life during the creation of rock murals, as well as look at  photographs taken in the region.";
const VERY_RARE_STONE = "The rare ones bear a brief biography and a photo of each artist who took part in the creation of the gallery on the rocks.";
const BTR_TEXT = "Few can see the drawings on the rocks live. To make street art more accessible, PushKeen is launching the “Back To The Roots” NFT project";
const MODEL_OF_STONE = "rotating 3D-model of the stone";
const IMAGE_WORK = "image of the artist's work";
const FACTS_PHOTO = "fact with the photo";
const ANIMATION_IMAGE = "animated image of the artist's work";
const PURCHASE = "Purchase";
const FOOTER_TEXT = "Most of the funds received from the sale of lots, will be sent to artists and to charity.";

export function changeLang() {
    $('.header__info').find('p').eq(0).text(HEADER_INFO);
    $('.second__info').find('h1').text(ABOUT_PROJECT);
    $('.second__info').find('p').text(TEXT_ABOUT_PROJECT);
    $('.second__read').text(READ_MORE);
    $('.tokens__button').eq(0).text(RARE);
    $('.tokens__button').eq(1).text(VERY_RARE);
    $('.price__title').find('h1').text(IDEOLOGY_OF_PROJECT);
    $('.ideology__title').text(TEXT_IDEOLOGY_OF_PROJECT);
    $('.category__title').eq(0).find('span').eq(0).text(RARE);
    $('.category__title').eq(1).find('span').eq(0).text(VERY_RARE);
    $('.category__text').eq(0).text(RARE_STONE);
    $('.category__text').eq(1).text(VERY_RARE_STONE);
    $('.price__title').find('p').text(BTR_TEXT);
    $('.card__title').eq(0).find('span').text(RARE);
    $('.card__title').eq(1).find('span').text(VERY_RARE);
    $('.card__content').each((index, item) => {
        $(item).find('span').text(MODEL_OF_STONE)
    })
    $('.card__content').each((index, item) => {
        $(item).find('li').eq($(item).find('li').length - 1).text(FACTS_PHOTO)
    })
    $('.card__content').eq(0).find('li').eq(0).text(IMAGE_WORK);
    $('.card__content').eq(1).find('li').eq(0).text(ANIMATION_IMAGE);
    $('.card__content').eq(1).find('li').eq(1).text(FACTS_PHOTO);
    $('.card__button').each((index, item) => {
        $(item).find('a').text(PURCHASE);
    })
    $('.charity__info').find('p').text(FOOTER_TEXT);
    $('.person').each((index, item) => {
        $(item).text(AUTHORS[index]);
    })
    $('.artTitle').each((index, item) => {
        $(item).text(ART_TITLE[index]);
    })
    $('.arts__text').each((index, item) => {
        $(item).text(ART_TEXT[index]);
    })
}