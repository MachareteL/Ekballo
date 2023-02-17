import Image from 'next/image'
import logo from '../../public/favicon.png'
import image1 from '../../public/imagens/class.jpeg'
import imagem from '../../public/imagens/ekballo(12).jpeg'
import muai from '../../public/imagens/fight.jpeg'
export default function Home() {
  return (
    <>

      <section className="mb-40">
{/* Image gallery swithing photos place */}

        <div className="px-6 py-12 md:px-12 text-gray-50 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Levando o <span className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-sky-400 via-fuchsia-800 to-red-700'> Amor </span><br />através do cuidado e do zelo</h1>
                <a className="inline-block px-7 py-3 mr-2 bg-gradient-to-r from-sky-400 via-fuchsia-700 to-red-700 text-white font-semibold text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="matricula" role="button">Quero ser aluno</a>
                {/* <a className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Mais informações</a> */}
              </div>
              <div className="mb-12 lg:mb-0">
                <Image src={imagem} className="rounded-lg shadow-lg" />
                {/* <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/028.jpg"
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>















      {/* Container que engloba toda o container principal da landing page da aplicação*/}
      <div id="somos" className="container my-12 px-6 mx-auto">

        {/* Primeira seção de conteúdo, usada para apresentar o projeto social. */}
        <section className="mb-32 text-gray-800">
          <h1 className="text-3xl text-neutral-200 font-bold mb-12 text-center sm:text-5xl">Projeto Social Ekballo</h1>

          <div className="flex flex-wrap mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg bg-center" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image src={image1} alt="kids" className='w-full saturate-150' />
                <a href="/cursos#cursos">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-slate-50 bg-opacity-30"></div>
                </a>
              </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4 text-stone-200">Quem Somos?</h3>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4 mr-2">
                  {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                  <path fill="currentColor"
                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z" />
                </svg>
                Movidos pelo amor
              </div>
              <p className="text-stone-200 mb-6">
                O Projeto Ekballo é um Projeto Social que tem como objetivo auxiliar a comunidade local através do ensino do Esporte, Instrumento Musical, Idiomas e Reforço Escolar.
              </p>
              <p className="text-stone-200">
                Atualmente atendemos mais de 20 crianças e diversos moradores da região. Oferecendo cursos e prática de esportes gratuito.
              </p>
              <p className="text-stone-200">
                Tudo isso fazemos para a glória de Deus, e no dia a dia as verdades o evangelho são levadas através do que vivemos e falamos.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-row-reverse mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg teste" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image src={muai} className="w-full" alt="AlunosMuaiThai" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-slate-50 bg-opacity-30"></div>
                </a>
              </div>
            </div>

            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-4 text-stone-200">A luta por dias melhores!</h3>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                  {/* <!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --> */}
                  <path fill="currentColor"
                    d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
                </svg>
                A arte
              </div>
              <p className="text-stone-200">
              Lutamos por mais oportunidades!
              </p>
            </div>
          </div>

          
        </section>
      </div>
      {/* <!-- Container for demo purpose --> */}



      {/* <div className="flex justify-center px-6">
        <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
            <p className="text-gray-700 text-base mb-4">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
          </div>
        </div>
      </div> */}


      {/* <div className="flex items-center justify-center">
        <div className="datepicker relative form-floating mb-3 xl:w-96" data-mdb-toggle-button="false">
          <input type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Select a date" />
          <label htmlFor="floatingInput" className="text-gray-700">Select a date</label>
          <button className="datepicker-toggle-button" data-mdb-toggle="datepicker">
            <i className="fas fa-calendar datepicker-toggle-icon"></i>
          </button>
        </div>
      </div> */}
      {/* <Image priority src={logo} alt="Logo" classNameName="invert"/> */}



    </>
  )
}
