import { Header } from "../../components/header/header";
import React from "react";
import { FaqContainer } from "./style";
import { DefaultPageStyle } from "../../styles/generalStyles";
import { ChakraProvider } from "@chakra-ui/react";

export const FaqPage = () => {
  return (
    <ChakraProvider>
      <Header />
      <DefaultPageStyle>
        <FaqContainer>
        <h1>Dúvidas frequentes</h1>
          <div className="faq">
            <div className="first-questions">
              <div className="question">
                <span>Quais os critérios para adotar com a MiauDota?</span>
                <article>
                  <p>
                    A adoção de um de nossos animais é autorizada mediante as
                    seguintes etapas: entrevista com a pessoa adotante para orientações, preenchimento de termo de adoção e visitação ao lar para entrega do(s) animal(is).
                  </p>
                  <br/>
                  <p>
                    A pessoa adotante deverá estar em casa para receber nossas pessoas voluntárias na visita, caso contrário iremos reagendar uma nova data. Não 
                    entregamos animais na mão de pessoas não autorizadas pela pessoa adotante ou doamos para menores de idade sem a autorização de um responsável legal.
                  </p>
                </article>
              </div>
              <div className="question">
                <span>Como me torno uma pessoa voluntária na MiauDota?</span>
                <article>
                  <p>
                    Nós <strong>preferimos</strong> que você entre em contato
                    pelo "Fale Conosco" e defina como assunto "voluntariado", informando 
                    seu desejo de estar atuando com a MiauDota.
                    Não esqueça de deixar seu telefone para contato.
                  </p>
                </article>
              </div>
              <div className="question">
                <span>A MiauDota me ajudará a cuidar do meu gatinho?</span>
                <article>
                  <p>
                    Em seu termo de adoção, nos comprometemos a entregar o
                    animal com no mínimo a primeira dose da vacina B10. Ele 
                    estará protegido contra parasitas e pulgas também mas, ao 
                    fim da eficácia das doses, é de sua responsabilidade.
                  </p>
                  <br/>
                  <p>
                    No entanto, assim que seu gatinho completar cinco meses,
                    oferecemos a castração gratuita dele em postos conveniados 
                    sob o acompnhamento de uma de nossas pessoas voluntárias. 
                    A MiauDota não te entregará nenhum animal acima dos cinco meses 
                    que não esteja castrado.
                  </p>
                </article>
              </div>
            </div>
            <div className="later-questions">
              <div className="question">
                <span>
                  Não posso mais ficar com meu gatinho, vocês ficam com ele?
                </span>
                <article>
                  <p>
                    A MiauDota entende o ato como abandono animal,
                    mas podemos inserir seu gato em nosso quadro de adoções até
                    que você consiga resolver sua situação.
                  </p>
                  <br/>
                  <p>
                    Em caso de abandono ou da necessidade de devolver o animal previamente
                    adotado, nós iremos recebê-lo com a consequência de inserir
                    seu nome em nossa lista de pessoa inconfiável e bloquearemos
                    seu número de telefone.
                  </p>
                </article>
              </div>
              <div className="question">
                <span>
                  Posso fazer denúncias de maus tratos para a MiauDota?
                </span>
                <article>
                  <p>
                    Apesar de nosso trabalho, a MiauDota não é um órgão de
                    caráter judicial. O que podemos fazer é ajudar na coleta de
                    provas para que uma denúncia formal seja
                    realizada em canais da prefeitura de sua cidade.
                  </p>
                  <br/>
                  <p>
                    Oferecemos também a visibilidade necessária para que a
                    situação seja resolvida o mais rápido possível, mas não temos o poder de autuar ninguém.
                  </p>
                </article>
              </div>
              <div className="question">
                <span>No que é gasto o dinheiro doado para a organização?</span>
                <article>
                  <p>
                    Com rações sólidas e sachês, areias higiênicas,
                    medicamentos, tratamentos e cirurgias e manutenção dos
                    espaços aonde os gatos habitam. A fim de evitar qualquer mau
                    entendido ou atrito desnecessário, a MiauDota presta contas
                    de todo tipo de material comprado com verba doada.
                  </p>
                  <br/>
                  <p>
                    Enviamos os comprovantes fiscais para a pessoa contribuidora
                    em seu e-mail do que foi adquirido através de seu apoio a
                    nosso grupo. A MiauDota não utiliza o dinheiro doado para
                    pagar alimentação ou transporte de nossas pessoas
                    voluntárias.
                  </p>
                </article>
              </div>
            </div>
          </div>
          <img id="cat-doubts" src="https://i.ibb.co/2ZMWhnx/catquestions.png" />
        </FaqContainer>
      </DefaultPageStyle>
    </ChakraProvider>
  );
};
