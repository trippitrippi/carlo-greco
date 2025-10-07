import { ArtGallery } from './types';

// A curated list of real, influential contemporary art galleries, sorted alphabetically.
const curatedGalleries: ArtGallery[] = [
  {
    id: 24,
    name: 'Agora Gallery',
    location: 'New York, USA',
    country: 'USA',
    description: 'Located in the heart of the Chelsea art district in New York City, Agora Gallery is a contemporary fine art gallery established in 1984. It is dedicated to the promotion of national and international artists.',
    website: 'https://www.agora-gallery.com/',
    imageUrl: 'https://picsum.photos/seed/agora-gallery-nyc/400/200',
    artists: [
      { id: 47, name: 'Clara Moreau', bio: 'A French painter whose abstract landscapes are characterized by bold colors and dynamic textures.', artworkUrl: 'https://picsum.photos/seed/clara-moreau/400/300', artistWebsite: 'https://www.instagram.com/claramoreau_art/' },
      { id: 48, name: 'Leo Martinez', bio: 'A Spanish digital artist creating intricate collages that explore the fusion of nature and urban life.', artworkUrl: 'https://picsum.photos/seed/leo-martinez/400/300', artistWebsite: 'https://www.leomartinez.art/' },
    ],
  },
  {
    id: 27,
    name: 'Blum & Poe',
    location: 'Los Angeles, USA',
    country: 'USA',
    description: 'A key gallery in connecting the Los Angeles and Tokyo art scenes. Blum & Poe has been instrumental in introducing postwar Japanese artists to the West, while also fostering a new generation of local talent.',
    website: 'https://www.blumandpoe.com/',
    imageUrl: 'https://picsum.photos/seed/blum-and-poe/400/200',
    artists: [
      { id: 53, name: 'Emi Nakamura', bio: 'A Japanese-American artist whose minimalist paintings on unconventional materials explore cross-cultural dialogues.', artworkUrl: 'https://picsum.photos/seed/emi-nakamura/400/300', artistWebsite: 'https://www.eminakamura.art/' },
      { id: 54, name: 'Julian Croft', bio: 'A painter from Los Angeles known for his atmospheric, dream-like landscapes of the city.', artworkUrl: 'https://picsum.photos/seed/julian-croft/400/300', artistWebsite: 'https://www.instagram.com/juliancroft.studio/' },
    ],
  },
  {
    id: 2,
    name: 'David Zwirner',
    location: 'New York, USA',
    country: 'USA',
    description: 'A contemporary art gallery with locations in New York, London, Hong Kong, and Paris, representing over 60 artists and estates.',
    website: 'https://www.davidzwirner.com/',
    imageUrl: 'https://picsum.photos/seed/david-zwirner/400/200',
    artists: [
      { id: 3, name: 'Yayoi Kusama', bio: 'A Japanese contemporary artist who works primarily in sculpture and installation.', artworkUrl: 'https://picsum.photos/seed/kusama/400/300', artistWebsite: 'http://yayoi-kusama.jp/' },
      { id: 4, name: 'Donald Judd', bio: 'An American artist associated with minimalism, a term he strongly objected to.', artworkUrl: 'https://picsum.photos/seed/judd/400/300', artistWebsite: 'https://juddfoundation.org/' },
    ],
  },
  {
    id: 1,
    name: 'Gagosian',
    location: 'New York, USA',
    country: 'USA',
    description: 'A global network of galleries specializing in modern and contemporary art. Gagosian has been a major force in the art world for over 40 years.',
    website: 'https://gagosian.com/',
    imageUrl: 'https://picsum.photos/seed/gagosian-gallery/400/200',
    artists: [
      { id: 1, name: 'Jeff Koons', bio: 'Known for working with popular culture subjects and his reproductions of banal objects.', artworkUrl: 'https://picsum.photos/seed/koons/400/300', artistWebsite: 'https://www.jeffkoons.com/' },
      { id: 2, name: 'Takashi Murakami', bio: 'His work draws from traditional Japanese painting, sci-fi, anime, and the global art market.', artworkUrl: 'https://picsum.photos/seed/murakami/400/300', artistWebsite: 'https://www.instagram.com/takashipom/' },
    ],
  },
  {
    id: 13,
    name: 'Galleria Continua',
    location: 'San Gimignano, Italy',
    country: 'Italy',
    description: 'Founded in 1990, with the intention to give continuity to contemporary art in a landscape rich with the signs of ancient art.',
    website: 'https://www.galleriacontinua.com/',
    imageUrl: 'https://picsum.photos/seed/galleria-continua-italy/400/200',
    artists: [
      { id: 25, name: 'Michelangelo Pistoletto', bio: 'A key figure in the development of Arte Povera.', artworkUrl: 'https://picsum.photos/seed/pistoletto/400/300', artistWebsite: 'http://www.pistoletto.it/' },
      { id: 26, name: 'Daniel Buren', bio: 'A French conceptual artist, painter, and sculptor.', artworkUrl: 'https://picsum.photos/seed/buren/400/300', artistWebsite: 'http://www.danielburen.com/' },
    ],
  },
  {
    id: 4,
    name: 'Hauser & Wirth',
    location: 'Los Angeles, USA',
    country: 'USA',
    description: 'A pioneer of global contemporary art galleries, representing a wide range of established and emerging artists.',
    website: 'https://www.hauserwirth.com/',
    imageUrl: 'https://picsum.photos/seed/hauser-wirth/400/200',
    artists: [
      { id: 7, name: 'Mark Bradford', bio: 'A contemporary artist known for his large-scale abstract paintings created out of paper.', artworkUrl: 'https://picsum.photos/seed/bradford/400/300', artistWebsite: 'https://www.artspace.com/mark_bradford' },
      { id: 8, name: 'Lorna Simpson', bio: 'A photographer and multimedia artist who explores themes of race, gender, and identity.', artworkUrl: 'https://picsum.photos/seed/simpson/400/300', artistWebsite: 'https://www.lsimpsonstudio.com/' },
    ],
  },
  {
    id: 15,
    name: 'Kaikai Kiki Gallery',
    location: 'Tokyo, Japan',
    country: 'Japan',
    description: 'Founded by Takashi Murakami, this gallery aims to promote and support Japanese contemporary artists, as well as introduce international artists to Japan.',
    website: 'http://gallery-kaikaikiki.com/',
    imageUrl: 'https://picsum.photos/seed/kaikai-kiki-gallery-tokyo/400/200',
    artists: [
      { id: 29, name: 'Aya Takano', bio: 'Known for her paintings and illustrations that blend sci-fi and manga aesthetics.', artworkUrl: 'https://picsum.photos/seed/takano/400/300', artistWebsite: 'https://www.instagram.com/takano.aya' },
      { id: 30, name: 'Mr.', bio: 'A contemporary artist whose works are influenced by otaku culture, a protégé of Takashi Murakami.', artworkUrl: 'https://picsum.photos/seed/mr-artist/400/300', artistWebsite: 'https://www.instagram.com/misteryanen' },
    ],
  },
  {
    id: 12,
    name: 'KÖNIG GALERIE',
    location: 'Berlin, Germany',
    country: 'Germany',
    description: 'Housed in a former church, KÖNIG GALERIE is a leading contemporary art gallery representing over 40 emerging and established artists.',
    website: 'https://www.koeniggalerie.com/',
    imageUrl: 'https://picsum.photos/seed/koenig-galerie-berlin/400/200',
    artists: [
      { id: 23, name: 'Katharina Grosse', bio: 'A German artist known for her large-scale, in-situ paintings that she sprays across various surfaces.', artworkUrl: 'https://picsum.photos/seed/grosse/400/300', artistWebsite: 'https://www.katharinagrosse.com/' },
      { id: 24, name: 'Jeppe Hein', bio: 'A Danish artist who produces interactive sculptures and installations.', artworkUrl: 'https://picsum.photos/seed/hein/400/300', artistWebsite: 'https://www.jeppehein.net/' },
    ],
  },
  {
    id: 25,
    name: 'Lehmann Maupin',
    location: 'New York, USA',
    country: 'USA',
    description: 'With locations in New York, Hong Kong, Seoul, and London, Lehmann Maupin is renowned for launching the careers of a diverse roster of global artists, giving them a major international platform.',
    website: 'https://www.lehmannmaupin.com/',
    imageUrl: 'https://picsum.photos/seed/lehmann-maupin/400/200',
    artists: [
      { id: 49, name: 'Sofia Reyes', bio: 'A Mexican painter whose large-scale canvases explore themes of memory and migration with vibrant, expressive strokes.', artworkUrl: 'https://picsum.photos/seed/sofia-reyes/400/300', artistWebsite: 'https://www.instagram.com/sofiart/' },
      { id: 50, name: 'Kaelen Smith', bio: 'A multimedia artist from the UK who uses video and sound installations to investigate digital culture and identity.', artworkUrl: 'https://picsum.photos/seed/kaelen-smith/400/300', artistWebsite: 'https://kaelensmith.com' },
    ],
  },
  {
    id: 8,
    name: 'Lisson Gallery',
    location: 'London, UK',
    country: 'UK',
    description: 'One of the most influential and longest-running international contemporary art galleries in the world.',
    website: 'https://www.lissongallery.com/',
    imageUrl: 'https://picsum.photos/seed/lisson-gallery/400/200',
    artists: [
      { id: 15, name: 'Anish Kapoor', bio: 'A British-Indian sculptor specializing in installation art and conceptual art.', artworkUrl: 'https://picsum.photos/seed/kapoor/400/300', artistWebsite: 'https://www.instagram.com/anish.kapoor' },
      { id: 16, name: 'Ai Weiwei', bio: 'A Chinese contemporary artist and activist.', artworkUrl: 'https://picsum.photos/seed/weiwei/400/300', artistWebsite: 'https://www.instagram.com/aiww' },
    ],
  },
  {
    id: 18,
    name: 'Long March Space',
    location: 'Beijing, China',
    country: 'China',
    description: 'A gallery and project space that is a key player in the development of contemporary art in China. It has a focus on experimental and ambitious projects.',
    website: 'http://www.longmarchspace.com/',
    imageUrl: 'https://picsum.photos/seed/long-march-space-beijing/400/200',
    artists: [
      { id: 35, name: 'Xu Zhen', bio: 'A conceptual artist whose work spans various media including video, installation, and performance.', artworkUrl: 'https://picsum.photos/seed/xuzhen/400/300', artistWebsite: 'http://www.xuzhen.com/' },
      { id: 36, name: 'Liu Wei', bio: 'Creates works that comment on the rapid urbanization and social changes in China.', artworkUrl: 'https://picsum.photos/seed/liuweib/400/300', artistWebsite: 'http://liustudio.com/' },
    ],
  },
  {
    id: 14,
    name: 'Massimo De Carlo',
    location: 'Milan, Italy',
    country: 'Italy',
    description: 'A major voice in the contemporary art scene, with galleries in Milan, London, and Hong Kong. Known for its eclectic and groundbreaking program.',
    website: 'https://www.massimodecarlo.com/',
    imageUrl: 'https://picsum.photos/seed/massimo-de-carlo/400/200',
    artists: [
      { id: 27, name: 'Maurizio Cattelan', bio: 'An Italian artist known for his satirical sculptures and installations.', artworkUrl: 'https://picsum.photos/seed/cattelan/400/300', artistWebsite: 'https://www.guggenheim.org/artwork/artist/maurizio-cattelan' },
      { id: 28, name: 'Rudolf Stingel', bio: 'An Italian artist based in New York, his work engages with painting, photography, and installation.', artworkUrl: 'https://picsum.photos/seed/stingel/400/300', artistWebsite: 'https://www.massimodecarlo.com/artists/86-rudolf-stingel' },
    ],
  },
  {
    id: 20,
    name: 'Mendes Wood DM',
    location: 'São Paulo, Brazil',
    country: 'Brazil',
    description: 'A contemporary art gallery that exhibits international and Brazilian artists, with a concern for regional difference and decentralization.',
    website: 'https://www.mendeswooddm.com/',
    imageUrl: 'https://picsum.photos/seed/mendes-wood-dm/400/200',
    artists: [
      { id: 39, name: 'Sonia Gomes', bio: 'A Brazilian artist who creates abstract sculptures from found and gifted materials like fabric, thread, and wire.', artworkUrl: 'https://picsum.photos/seed/gomes/400/300', artistWebsite: 'https://www.mendeswooddm.com/artists/43-sonia-gomes' },
      { id: 40, name: 'Paulo Monteiro', bio: 'A Brazilian artist whose work encompasses painting, drawing, and sculpture with a minimalist and delicate approach.', artworkUrl: 'https://picsum.photos/seed/monteiro/400/300', artistWebsite: 'https://www.mendeswooddm.com/artists/69-paulo-monteiro' },
    ],
  },
  {
    id: 16,
    name: 'Mizuma Art Gallery',
    location: 'Tokyo, Japan',
    country: 'Japan',
    description: 'Since its opening in 1994, Mizuma Art Gallery has been promoting Japanese and Asian artists with a unique vision to a wider audience.',
    website: 'https://mizuma-art.co.jp/',
    imageUrl: 'https://picsum.photos/seed/mizuma-art-gallery-tokyo/400/200',
    artists: [
      { id: 31, name: 'Makoto Aida', bio: 'A controversial contemporary Japanese artist known for his manga, painting, video, and sculpture.', artworkUrl: 'https://picsum.photos/seed/aida-makoto/400/300', artistWebsite: 'http://aidamakoto.com/' },
      { id: 32, name: 'Jun Nguyen-Hatsushiba', bio: 'A Japanese-Vietnamese artist, known for his video works and installations.', artworkUrl: 'https://picsum.photos/seed/hatsushiba/400/300', artistWebsite: 'https://www.mizuma-art.co.jp/artists/0100/' },
    ],
  },
  {
    id: 22,
    name: 'MUJIN-TO Production',
    location: 'Tokyo, Japan',
    country: 'Japan',
    description: 'An artist-centric gallery known for its experimental and conceptual projects. It provides a platform for artists working with new media, performance, and video.',
    website: 'http://mujin-to.com/',
    imageUrl: 'https://picsum.photos/seed/mujinto-production/400/200',
    artists: [
      { id: 43, name: 'Haruka Mori', bio: 'A new media artist exploring the relationship between digital consciousness and urban environments through AI-generated video installations.', artworkUrl: 'https://picsum.photos/seed/haruka-mori-media/400/300', artistWebsite: 'https://harukamori.art/' },
      { id: 44, name: 'Kaito Suzuki', bio: 'A performance artist whose work addresses themes of social isolation and connectivity in modern Japan.', artworkUrl: 'https://picsum.photos/seed/kaito-suzuki-perf/400/300', artistWebsite: 'https://www.instagram.com/kaito_s_performance/' },
    ],
  },
  {
    id: 21,
    name: 'NANZUKA UNDERGROUND',
    location: 'Tokyo, Japan',
    country: 'Japan',
    description: 'A gallery at the forefront of Tokyo\'s contemporary art scene, focusing on artists who challenge conventions and explore Japanese pop culture and subculture.',
    website: 'https://nanzuka.com/',
    imageUrl: 'https://picsum.photos/seed/nanzuka-gallery/400/200',
    artists: [
      { id: 41, name: 'Yuki Tanaka', bio: 'An emerging artist whose work reinterprets traditional ukiyo-e woodblock prints through a cyberpunk lens.', artworkUrl: 'https://picsum.photos/seed/yuki-tanaka-art/400/300', artistWebsite: 'https://www.instagram.com/yuki_t_art/' },
      { id: 42, name: 'Ren Ito', bio: 'A sculptor creating hyper-realistic figures that blur the line between anime characters and reality.', artworkUrl: 'https://picsum.photos/seed/ren-ito-sculpture/400/300', artistWebsite: 'https://www.instagram.com/ren_ito_sculpt/' },
    ],
  },
  {
    id: 3,
    name: 'Pace Gallery',
    location: 'New York, USA',
    country: 'USA',
    description: 'A leading contemporary art gallery representing many of the most significant international artists and estates of the 20th and 21st centuries.',
    website: 'https://www.pacegallery.com/',
    imageUrl: 'https://picsum.photos/seed/pace-gallery-ny/400/200',
    artists: [
      { id: 5, name: 'Agnes Martin', bio: 'An American abstract painter, her work is most closely associated with Taos, New Mexico.', artworkUrl: 'https://picsum.photos/seed/agnes-martin/400/300', artistWebsite: 'https://www.guggenheim.org/artwork/artist/agnes-martin' },
      { id: 6, name: 'James Turrell', bio: 'An American artist primarily concerned with light and space.', artworkUrl: 'https://picsum.photos/seed/turrell/400/300', artistWebsite: 'https://jamesturrell.com/' },
    ],
  },
  {
    id: 9,
    name: 'Perrotin',
    location: 'Paris, France',
    country: 'France',
    description: 'An influential contemporary art gallery founded by Emmanuel Perrotin. It represents a mix of established and emerging artists.',
    website: 'https://www.perrotin.com/',
    imageUrl: 'https://picsum.photos/seed/perrotin-paris/400/200',
    artists: [
      { id: 17, name: 'JR', bio: 'A French photographer and street artist who exhibits freely in the "biggest art gallery in the world".', artworkUrl: 'https://picsum.photos/seed/jr-artist/400/300', artistWebsite: 'https://www.jr-art.net/' },
      { id: 18, name: 'Sophie Calle', bio: 'A French writer, photographer, installation artist, and conceptual artist.', artworkUrl: 'https://picsum.photos/seed/calle/400/300', artistWebsite: 'https://www.perrotin.com/artists/sophie-calle' },
    ],
  },
  {
    id: 26,
    name: 'Pilar Corrias',
    location: 'London, UK',
    country: 'UK',
    description: 'An influential London gallery known for its sharp curatorial eye and for championing emerging and mid-career artists with intellectually rigorous and visually compelling practices.',
    website: 'https://www.pilarcorrias.com/',
    imageUrl: 'https://picsum.photos/seed/pilar-corrias/400/200',
    artists: [
      { id: 51, name: 'David Chen', bio: 'A Chinese-American sculptor who creates delicate, kinetic sculptures that react to their environment.', artworkUrl: 'https://picsum.photos/seed/david-chen-art/400/300', artistWebsite: 'https://www.instagram.com/davidchensculpt/' },
      { id: 52, name: 'Amara Okoro', bio: 'A Nigerian photographer whose portraits challenge conventional representations of beauty and identity in West Africa.', artworkUrl: 'https://picsum.photos/seed/amara-okoro/400/300', artistWebsite: 'https://amaraokoro.com' },
    ],
  },
  {
    id: 5,
    name: 'Roberts Projects',
    location: 'Los Angeles, USA',
    country: 'USA',
    description: 'Recognized for its representation of internationally established and emerging artists who work across a variety of mediums.',
    website: 'https://www.robertsprojectsla.com/',
    imageUrl: 'https://picsum.photos/seed/roberts-projects/400/200',
    artists: [
      { id: 9, name: 'Kehinde Wiley', bio: 'An American portrait painter known for his highly naturalistic paintings of Black people.', artworkUrl: 'https://picsum.photos/seed/wiley/400/300', artistWebsite: 'https://kehindewiley.com/' },
      { id: 10, name: 'Betye Saar', bio: 'An American artist known for her work in the medium of assemblage.', artworkUrl: 'https://picsum.photos/seed/saar/400/300', artistWebsite: 'https://www.instagram.com/betyesaar/' },
    ],
  },
  {
    id: 19,
    name: 'ShanghART Gallery',
    location: 'Shanghai, China',
    country: 'China',
    description: 'One of the first contemporary art galleries established in Shanghai, playing a key role in the development of Chinese contemporary art.',
    website: 'https://www.shanghartgallery.com/',
    imageUrl: 'https://picsum.photos/seed/shanghart-gallery/400/200',
    artists: [
      { id: 37, name: 'Zeng Fanzhi', bio: 'His work is characterized by its emotional directness, intuitive psychological sense, and carefully calibrated expressionistic technique.', artworkUrl: 'https://picsum.photos/seed/fanzhi/400/300', artistWebsite: 'https://www.gagosian.com/artists/zeng-fanzhi' },
      { id: 38, name: 'Ding Yi', bio: 'An artist known for his abstract paintings featuring crosses and grids.', artworkUrl: 'https://picsum.photos/seed/dingyi/400/300', artistWebsite: 'https://www.shanghartgallery.com/artists/ding-yi' },
    ],
  },
  {
    id: 11,
    name: 'Sprüth Magers',
    location: 'Berlin, Germany',
    country: 'Germany',
    description: 'Known for its rigorous and intellectually challenging program of exhibitions, representing a wide range of pioneering contemporary artists.',
    website: 'https://spruethmagers.com/',
    imageUrl: 'https://picsum.photos/seed/spruth-magers/400/200',
    artists: [
      { id: 21, name: 'Barbara Kruger', bio: 'An American conceptual artist and collagist associated with the Pictures Generation.', artworkUrl: 'https://picsum.photos/seed/kruger/400/300', artistWebsite: 'https://spruethmagers.com/artists/barbara-kruger/' },
      { id: 22, name: 'Andreas Gursky', bio: 'A German photographer and professor at the Kunstakademie Düsseldorf, Germany.', artworkUrl: 'https://picsum.photos/seed/gursky/400/300', artistWebsite: 'https://www.andreasgursky.com/' },
    ],
  },
  {
    id: 17,
    name: 'Taka Ishii Gallery',
    location: 'Tokyo, Japan',
    country: 'Japan',
    description: 'A leading gallery in Japan for contemporary art and photography, representing influential Japanese and international artists.',
    website: 'https://www.takaishiigallery.com/',
    imageUrl: 'https://picsum.photos/seed/taka-ishii-gallery-tokyo/400/200',
    artists: [
      { id: 33, name: 'Daido Moriyama', bio: 'A Japanese photographer known for his confrontational, black-and-white images depicting the breakdown of traditional values.', artworkUrl: 'https://picsum.photos/seed/moriyama/400/300', artistWebsite: 'https://www.moriyamadaido.com/' },
      { id: 34, name: 'Nobuyoshi Araki', bio: 'A Japanese photographer and contemporary artist, one of the most prolific artists from Japan.', artworkUrl: 'https://picsum.photos/seed/araki/400/300', artistWebsite: 'https://www.arakinobuyoshi.com/' },
    ],
  },
  {
    id: 10,
    name: 'Thaddaeus Ropac',
    location: 'Paris, France',
    country: 'France',
    description: 'Represents around 60 international artists and major estates, with spaces across Europe and Asia.',
    website: 'https://ropac.net/',
    imageUrl: 'https://picsum.photos/seed/thaddaeus-ropac-paris/400/200',
    artists: [
      { id: 19, name: 'Anselm Kiefer', bio: 'A German painter and sculptor, his works incorporate materials such as straw, ash, clay, lead, and shellac.', artworkUrl: 'https://picsum.photos/seed/kiefer/400/300', artistWebsite: 'https://gagosian.com/artists/anselm-kiefer/' },
      { id: 20, name: 'Georg Baselitz', bio: 'A German painter, sculptor and graphic artist known for his upside-down images.', artworkUrl: 'https://picsum.photos/seed/baselitz/400/300', artistWebsite: 'https://ropac.net/artists/43-georg-baselitz/' },
    ],
  },
  {
    id: 7,
    name: 'Victoria Miro',
    location: 'London, UK',
    country: 'UK',
    description: 'Exhibits the work of established and emerging artists from the USA, Europe and Asia. The gallery is known for launching the careers of many artists.',
    website: 'https://www.victoria-miro.com/',
    imageUrl: 'https://picsum.photos/seed/victoria-miro/400/200',
    artists: [
      { id: 13, name: 'Chris Ofili', bio: 'A British Turner Prize-winning painter who is best known for his paintings incorporating elephant dung.', artworkUrl: 'https://picsum.photos/seed/ofili/400/300', artistWebsite: 'https://www.instagram.com/chrisofilistudio' },
      { id: 14, name: 'Grayson Perry', bio: 'An English contemporary artist, writer and broadcaster, known for his ceramic vases and tapestries.', artworkUrl: 'https://picsum.photos/seed/perry/400/300', artistWebsite: 'https://www.instagram.com/theresidentartist' },
    ],
  },
  {
    id: 23,
    name: 'Waitingroom',
    location: 'Tokyo, Japan',
    country: 'Japan',
    description: 'An independent art space dedicated to showcasing emerging Japanese and international artists, with a focus on painting, drawing, and small-scale sculpture.',
    website: 'https://waitingroom.jp/',
    imageUrl: 'https://picsum.photos/seed/waitingroom-gallery/400/200',
    artists: [
      { id: 45, name: 'Airi Sato', bio: 'A painter whose minimalist works explore concepts of "ma" (negative space) and tranquility in contemporary life.', artworkUrl: 'https://picsum.photos/seed/airi-sato-paint/400/300', artistWebsite: 'https://www.instagram.com/airisato.studio/' },
      { id: 46, name: 'Daiki Yamamoto', bio: 'A ceramicist creating abstract, organic forms that challenge traditional pottery techniques.', artworkUrl: 'https://picsum.photos/seed/daiki-yamamoto-ceramics/400/300', artistWebsite: 'https://www.daikiyamamoto.com/' },
    ],
  },
  {
    id: 6,
    name: 'White Cube',
    location: 'London, UK',
    country: 'UK',
    description: 'One of the world\'s leading contemporary art galleries. It has played a central role in the careers of many of the Young British Artists (YBAs).',
    website: 'https://www.whitecube.com/',
    imageUrl: 'https://picsum.photos/seed/white-cube-london/400/200',
    artists: [
      { id: 11, name: 'Damien Hirst', bio: 'An English artist, entrepreneur, and art collector, one of the Young British Artists (YBAs).', artworkUrl: 'https://picsum.photos/seed/hirst/400/300', artistWebsite: 'https://damienhirst.com/' },
      { id: 12, name: 'Tracey Emin', bio: 'Known for her autobiographical and confessional artwork.', artworkUrl: 'https://picsum.photos/seed/emin/400/300', artistWebsite: 'https://www.instagram.com/traceyeminstudio/' },
    ],
  },
];


// --- Procedurally Generated Galleries ---

const artCities = [
  { city: 'Seoul', country: 'South Korea' }, { city: 'Hong Kong', country: 'China' },
  { city: 'Singapore', country: 'Singapore' }, { city: 'Mexico City', country: 'Mexico' },
  { city: 'Buenos Aires', country: 'Argentina' }, { city: 'Bogotá', country: 'Colombia' },
  { city: 'Johannesburg', country: 'South Africa' }, { city: 'Lagos', country: 'Nigeria' },
  { city: 'Sydney', country: 'Australia' }, { city: 'Melbourne', country: 'Australia' },
  { city: 'Brussels', country: 'Belgium' }, { city: 'Zürich', country: 'Switzerland' },
  { city: 'Vienna', country: 'Austria' }, { city: 'Madrid', country: 'Spain' },
  { city: 'Lisbon', country: 'Portugal' }, { city: 'Amsterdam', country: 'Netherlands' },
  { city: 'Stockholm', country: 'Sweden' }, { city: 'Copenhagen', country: 'Denmark' },
  { city: 'São Paulo', country: 'Brazil' }, { city: 'Chicago', country: 'USA' },
  { city: 'Miami', country: 'USA' }, { city: 'San Francisco', country: 'USA' },
  { city: 'Toronto', country: 'Canada' }, { city: 'Vancouver', country: 'Canada' },
  { city: 'Dubai', country: 'UAE' }, { city: 'Mumbai', country: 'India' },
  { city: 'New Delhi', country: 'India' }, { city: 'Kyoto', country: 'Japan' },
  { city: 'Osaka', country: 'Japan' }, { city: 'Istanbul', country: 'Turkey' },
  { city: 'Tel Aviv', country: 'Israel' }, { city: 'Warsaw', country: 'Poland' },
];

// MADS Gallery-inspired name generation
const galleryPrefixes = ['Chroma', 'Vector', 'Quantum', 'Nexus', 'Aether', 'Kinetica', 'Prisma', 'Terra', 'Ecliptic', 'Axon', 'Flux', 'Myriad', 'Aperture', 'Oracle', 'Echo'];
const gallerySuffixes = ['Collective', 'Art Lab', 'Digital', 'Projects', 'Curated', 'Atelier', 'Art House', 'Platform', 'Exhibits', 'Creative', 'Studios', 'Initiative'];

const artistFirstNames = ['Elena', 'Marco', 'Anya', 'Liam', 'Sofia', 'Kenji', 'Isabella', 'Javier', 'Yuna', 'Omar', 'Chloé', 'Ravi', 'Nia', 'Gustav', 'Freja', 'Sasha', 'Mateo', 'Lina', 'Kazuki', 'Fatima'];
const artistLastNames = ['Volkov', 'Santoro', 'Järvinen', 'Baek', 'Al-Jamil', 'Gauthier', 'Novak', 'Singh', 'Okafor', 'Andersen', 'Morales', 'De Vries', 'Nowak', 'Katō', 'Ziegler', 'Chen', 'Silva', 'Kim', 'Abbas', 'Petrov'];

const artistBioTemplates = [
  'esplora temi di identità digitale attraverso mixed media.',
  'un pittore il cui lavoro fonde paesaggi urbani con forme astratte.',
  'uno scultore che utilizza materiali riciclati per commentare il consumismo.',
  'un fotografo che cattura momenti surreali nella vita di tutti i giorni.',
  'un artista di new media che crea installazioni interattive basate sui dati.',
  'il cui lavoro esamina l\'intersezione tra natura e tecnologia.',
  'un artista tessile che reinterpreta le tecniche tradizionali in un contesto moderno.',
  'un artista concettuale che sfida la percezione dello spettatore.',
];

const galleryDescriptionTemplates = [
  'Una piattaforma online dedicata alla promozione delle voci emergenti nell\'arte contemporanea da {country} e oltre.',
  'Un collettivo internazionale di artisti con sede a {city}, che cura mostre digitali innovative.',
  'Focalizzati su new media e arte digitale, questo spazio presenta talenti all\'avanguardia da tutto il mondo.',
  'Uno studio e uno spazio espositivo a {city} che funge da incubatore per artisti locali e internazionali.',
  'Un\'iniziativa artistica che organizza cataloghi online e mostre collettive, collegando artisti e collezionisti.',
  'Questo laboratorio d\'arte a {city} è noto per il suo programma sperimentale e per il supporto a pratiche artistiche non convenzionali.',
];

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateAdditionalGalleries = (count: number): ArtGallery[] => {
  const generated: ArtGallery[] = [];
  let artistIdCounter = 55; // Start after the new manually added artists

  for (let i = 0; i < count; i++) {
    const galleryId = curatedGalleries.length + i + 1;
    const { city, country } = getRandom(artCities);
    
    const name = `${getRandom(galleryPrefixes)} ${getRandom(gallerySuffixes)}`;
    const gallerySlug = slugify(name);
    
    const numArtists = getRandomInt(2, 5);
    const artists = [];
    for (let j = 0; j < numArtists; j++) {
      const artistName = `${getRandom(artistFirstNames)} ${getRandom(artistLastNames)}`;
      const artistSlug = slugify(artistName);
      artists.push({
        id: artistIdCounter++,
        name: artistName,
        bio: `Un artista di ${city} che ${getRandom(artistBioTemplates)}`,
        artworkUrl: `https://picsum.photos/seed/${artistSlug}/400/300`,
        artistWebsite: `https://www.instagram.com/explore/tags/${artistSlug}/`,
      });
    }

    const description = getRandom(galleryDescriptionTemplates)
      .replace('{city}', city)
      .replace('{country}', country);

    generated.push({
      id: galleryId,
      name: name,
      location: `${city}, ${country}`,
      country: country,
      description: description,
      website: `https://www.artsy.net/search?term=${encodeURIComponent(name)}`,
      imageUrl: `https://picsum.photos/seed/${gallerySlug}/400/200`,
      artists: artists,
    });
  }
  return generated;
};

const additionalGalleries = generateAdditionalGalleries(200);

export const galleries: ArtGallery[] = [...curatedGalleries, ...additionalGalleries];
