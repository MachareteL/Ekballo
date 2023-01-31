import { useRouter } from 'next/router';
import React, { Component } from 'react';

export default function privacidade() {
    const route = useRouter()

    return (
    <>
        <div className='container px-5 mt-10 sm:m-auto sm:px-0 sm:mt-10'>
            <h1 className='text-xl font-bold text-slate-500'>Política Privacidade</h1>
            <br />
            <p>A sua privacidade é importante para nós. Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <br />

            <div>
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados. 
                <br />
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                <br />
                <br />
            </div>
            <p>
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>

            <p>
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.
            </p>
            <br />
            <br />
 

            <h1 className='text-xl font-bold text-slate-500'>Compromisso do Usuário</h1>
            <br />
            <p>O Aluno <span className='underline italic'>(responsável do aluno caso menor de idade)</span> se compromete a fazer uso adequado dos conteúdos e das informações que o Ekballo oferece no site e/ou durante as aulas e com caráter enunciativo, mas não limitativo:</p>
            <br />
            <ul>
                <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública, bem como vandalizar fisicamente ou moralmente as instalçoes do projeto;</li>
                <br />
                <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
                </li>
                <br />
                <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Ekballo, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.
                </li>
                <br />
            </ul>

            <h3>Mais informações</h3>

            <p>
                Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza <button className='underline italic cursor-pointer' onClick={()=> route.push('https://google.com.br')}>Entre em contato</button>
            </p>

            <p className='italic'>31 January 2023 18:13</p>
        </div>
    </>
    );
}
