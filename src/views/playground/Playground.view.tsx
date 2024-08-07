import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from '@/components';

export { ErrorBoundary };

export function Component() {
  const { t } = useTranslation();
  return (
    <>
      <div className='bg-white dark:bg-gray-900'>
        <div className='relative isolate px-6 pt-14 lg:px-8'>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            ></div>
          </div>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white'>
                Announcing our next round of funding.{' '}
                <a href='#' className='font-semibold text-indigo-600'>
                  <span className='absolute inset-0' aria-hidden='true'></span>Read more{' '}
                  <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white'>
                Data to enrich your online business
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </a>
                <a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className='bg-white py-24 sm:py-32 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:text-center'>
            <h2 className='text-base font-semibold leading-7 text-indigo-600'>Deploy faster</h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
              Everything you need to deploy your app
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget
              egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <svg
                      className='h-6 w-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
                      />
                    </svg>
                  </div>
                  Push to deploy
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-white'>
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  Odio urna massa nunc massa.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <svg
                      className='h-6 w-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
                      />
                    </svg>
                  </div>
                  SSL certificates
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-white'>
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales
                  gravida quam turpis enim lacus amet.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <svg
                      className='h-6 w-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
                      />
                    </svg>
                  </div>
                  Simple queues
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-white'>
                  Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor
                  congue commodo diam neque.
                </dd>
              </div>
              <div className='relative pl-16'>
                <dt className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
                  <div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600'>
                    <svg
                      className='h-6 w-6 text-white'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33'
                      />
                    </svg>
                  </div>
                  Advanced security
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600 dark:text-white'>
                  Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.
                  Id hac maecenas ac donec pharetra eget.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className='bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
          <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
              aria-hidden='true'
            >
              <circle
                cx='512'
                cy='512'
                r='512'
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fill-opacity='0.7'
              />
              <defs>
                <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                  <stop stop-color='#7775D6' />
                  <stop offset='1' stop-color='#E935C1' />
                </radialGradient>
              </defs>
            </svg>
            <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-300'>
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                sagittis vel nulla.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                <a
                  href='#'
                  className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:bg-indigo-600'
                >
                  Get started
                </a>
                <a href='#' className='text-sm font-semibold leading-6 text-white'>
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div>
            </div>
            <div className='relative mt-16 h-80 lg:mt-8'>
              <img
                className='absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
                src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
                alt='App screenshot'
                width='1824'
                height='1080'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-24 sm:py-32 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
              Simple no-tricks pricing
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi
              velit ut non voluptas in. Explicabo id ut laborum.
            </p>
          </div>
          <div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
            <div className='p-8 sm:p-10 lg:flex-auto'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                Lifetime membership
              </h3>
              <p className='mt-6 text-base leading-7 text-gray-600 dark:text-white'>
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis
                perferendis blanditiis repellendus etur quidem assumenda.
              </p>
              <div className='mt-10 flex items-center gap-x-4'>
                <h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
                  What’s included
                </h4>
                <div className='h-px flex-auto bg-gray-100'></div>
              </div>
              <ul
                role='list'
                className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
              >
                <li className='flex gap-x-3 dark:text-white'>
                  <svg
                    className='h-6 w-5 flex-none text-indigo-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  Private forum access
                </li>
                <li className='flex gap-x-3 dark:text-white'>
                  <svg
                    className='h-6 w-5 flex-none text-indigo-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  Member resources
                </li>
                <li className='flex gap-x-3 dark:text-white'>
                  <svg
                    className='h-6 w-5 flex-none text-indigo-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  Entry to annual conference
                </li>
                <li className='flex gap-x-3 dark:text-white'>
                  <svg
                    className='h-6 w-5 flex-none text-indigo-600'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clip-rule='evenodd'
                    />
                  </svg>
                  Official member t-shirt
                </li>
              </ul>
            </div>
            <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
              <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 dark:bg-gray-800'>
                <div className='mx-auto max-w-xs px-8'>
                  <p className='text-base font-semibold text-gray-600 dark:text-white'>
                    Pay once, own it forever
                  </p>
                  <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                    <span className='text-5xl font-bold tracking-tight text-gray-900 dark:text-white'>
                      $349
                    </span>
                    <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-white'>
                      USD
                    </span>
                  </p>
                  <a
                    href='#'
                    className='mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Get access
                  </a>
                  <p className='mt-6 text-xs leading-5 text-gray-600 dark:text-white'>
                    Invoices and receipts available for easy company reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-24 sm:py-32 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-gray-600 dark:text-white'>
                Transactions every 24 hours
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
                44 million
              </dd>
            </div>
            <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-gray-600 dark:text-white'>
                Assets under holding
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
                $119 trillion
              </dd>
            </div>
            <div className='mx-auto flex max-w-xs flex-col gap-y-4'>
              <dt className='text-base leading-7 text-gray-600 dark:text-white'>
                New users annually
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white'>
                46,000
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <section className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),black)] opacity-20'></div>
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-shadow-indigo-600 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center'></div>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <img
            className='mx-auto h-12'
            src='https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg'
            alt=''
          />
          <figure className='mt-10'>
            <blockquote className='text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 dark:text-white'>
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas
                culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <img
                className='mx-auto h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900 dark:text-white'>Judith Black</div>
                <svg
                  viewBox='0 0 2 2'
                  width='3'
                  height='3'
                  aria-hidden='true'
                  className='fill-gray-900 dark:fill-white'
                >
                  <circle cx='1' cy='1' r='1' />
                </svg>
                <div className='text-gray-600 dark:text-white'>CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <div className='bg-white py-24 sm:py-32 dark:bg-gray-900'>
        <div className='mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
              Meet our leadership
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-white'>
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim
              vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role='list'
            className='grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2'
          >
            <li>
              <div className='flex items-center gap-x-6'>
                <img
                  className='h-16 w-16 rounded-full'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div>
                  <h3 className='text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white'>
                    Leslie Alexander
                  </h3>
                  <p className='text-sm font-semibold leading-6 text-indigo-600 dark:text-white'>
                    Co-Founder / CEO
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-white py-24 sm:py-32 dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white'>
              From the blog
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600 dark:text-white'>
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            <article className='flex max-w-xl flex-col items-start justify-between'>
              <div className='flex items-center gap-x-4 text-xs'>
                <time className='text-gray-500 dark:text-white'>Mar 16, 2020</time>
                <a
                  href='#'
                  className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-indigo-600'
                >
                  Marketing
                </a>
              </div>
              <div className='group relative'>
                <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                  <a href='#'>
                    <span className='absolute inset-0'></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-white'>
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non
                  aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur
                  nulla deserunt vel. Iusto corrupti dicta.
                </p>
              </div>
              <div className='relative mt-8 flex items-center gap-x-4'>
                <img
                  src='https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                  className='h-10 w-10 rounded-full bg-gray-50'
                />
                <div className='text-sm leading-6'>
                  <p className='font-semibold text-gray-900'>
                    <a href='#'>
                      <span className='absolute inset-0'></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className='text-gray-600 dark:text-white'>Co-Founder / CTO</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
