import { goToAbout } from "../routes/coordinator"
import { goToDonate } from "../routes/coordinator"
import { goToFaq } from "../routes/coordinator"

export const Posts = [
    {
        tag: "Sobre Nós",
        title: "O que é a MiauDota?",
        image: "https://i.ibb.co/KK92pmD/post1.png",
        text: "Conheça o nosso projeto, todo o nosso trabalho e nossa história, entenda nossas motivações. A MiauDota te convida para ser parte o nosso quadro de pessoas voluntárias.",
        route: goToAbout
    }
    ,
    {
        tag: "Doações",
        title: "Sua doação é importante!",
        image: "https://i.ibb.co/rmWhGRz/post2.png",
        text: "Cada valor doado para a MiauDota é convertido em diversos recursos essenciais que tornam menos árua a vida de vários gatos abandonados sob nossos cuidados.",
        route: goToDonate 
    }
    ,
    {
     tag: "FAQ",
     title: "Dúvidas frequentes.",
     image: "https://www.bemparana.com.br/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-10-at-20.07.29.jpeg",
     text: "Quer saber como entrar pra nossa equipe? Ou talvez o que é preciso para adotar um de nossos gatos. Te explicamos até como podemos te ajudar com denúncias.",
     route: goToFaq   
    }
]