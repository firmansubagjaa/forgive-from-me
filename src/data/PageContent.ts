import type { PageContent } from "../components/LetterContent";
import images from "./images";

const pages: PageContent[] = [
    {
        title: "A Little Message for You",
        text: "Jujur, selama ini kita selalu bersakit-sakitan karena mungkin apa yang harus kita harapkan selalu tidak terwujud.",
        sub: "Aku kangen di mana masa-masa kita bisa bercanda bareng, asbun bareng, tanpa rasa sakit hati kembali...",
        img: images.image_0,
        alt: "Gambar ilustrasi bernuansa sedih yang melambangkan asa yang belum terwujud",
        color: "text-rose-500"
    },
    {
        title: "My Deepest Regret",
        text: "Akhir-akhir ini aku merasa bersalah dan berdosa atas sifat aku ini.",
        sub: "Aku sayang kamu dan pure tulus. Aku pun merasa hubungan kita semakin kesini semakin tidak sehat...",
        img: images.image_1,
        alt: "Gambar ilustrasi merepresentasikan rasa penyesalan",
        color: "text-slate-700"
    },
    {
        title: "Broken But Hopeful",
        text: "Tapi aku ingin semua ini aku perbaiki hubungan kita sedia kala kembali.",
        sub: "Walaupun untuk saat ini aku hanya sebatas bisa interaksi di sosial media...",
        img: images.image_2,
        alt: "Gambar ilustrasi melambangkan memori interaksi sosial media",
        color: "text-rose-600"
    },
    {
        title: "I Feel You",
        text: "Aku sedih ngebayangin lala merasa feeling lonely yang seharusnya aku ada disana...",
        sub: "Aku tidak membela apapun, karena pure permintaan maaf dari hati terdalam.",
        img: images.image_3,
        alt: "Gambar ilustrasi melambangkan perasaan kesepian dan empati",
        color: "text-slate-600"
    },
    {
        title: "Last Piece of My Heart",
        text: "Untuk lala, makasih banyak telah menemani aku hingga saat ini. Maaf atas tingkah aku yang bikin kamu muak.",
        sub: "Aku harap kita bisa baikan kembali dan memulai dari awal lagi...",
        img: images.image_baru,
        alt: "Gambar ilustrasi melambangkan permintaan maaf dan harapan baru",
        color: "text-rose-500"
    }
];

export default pages;
