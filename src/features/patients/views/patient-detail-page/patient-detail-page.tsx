import {
  CalendarIcon,
  CreditCardIcon,
  HeartIcon,
  KeyIcon,
  PaperClipIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Tổng quan', href: '#over-view', icon: HeartIcon, current: true },
  { name: 'Thông tin cá nhân', href: '#profile', icon: UserCircleIcon, current: false },
  { name: 'Người thân', href: '#', icon: KeyIcon, current: false },
  { name: 'Lịch sử khám chữa bệnh', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Tiền sử bệnh tật, dị ứng', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Tiền sử phẫu thuật', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Tình trạng lúc sinh', href: '#', icon: KeyIcon, current: false },
  { name: 'Tiền sử gia đình', href: '#', icon: CreditCardIcon, current: false },
];

const positions = [
  {
    id: 1,
    title: 'Nguyễn Văn A',
    type: 'Full-time',
    location: '0774.47.48.42',
    department: 'Con trai',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Nguyễn Thị B',
    type: 'Full-time',
    location: '0774.47.48.42',
    department: 'Con gái',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function PatientDetailPage() {
  return (
    <div className='lg:grid lg:grid-cols-12 lg:gap-x-5'>
      <aside className='hidden lg:block py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0'>
        <nav className='space-y-1 sticky top-6'>
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                  : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium',
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? 'text-indigo-500 group-hover:text-indigo-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                )}
                aria-hidden='true'
              />
              <span className='truncate'>{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      <div className='space-y-6 sm:px-6 lg:col-span-9 lg:px-0'>
        <form action='' id='over-view'>
          <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>Applicant Information</h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details and application.</p>
            </div>
            <div className='border-t border-gray-200'>
              <dl>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Full name</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>Margot Foster</dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Application for</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>Backend Developer</dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Email address</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>margotfoster@example.com</dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Salary expectation</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>$120,000</dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>About</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                    Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                    proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                    <ul className='divide-y divide-gray-200 rounded-md border border-gray-200'>
                      <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                        <div className='flex w-0 flex-1 items-center'>
                          <PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                          <span className='ml-2 w-0 flex-1 truncate'>resume_back_end_developer.pdf</span>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a href='download' className='font-medium text-indigo-600 hover:text-indigo-500'>
                            Download
                          </a>
                        </div>
                      </li>
                      <li className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                        <div className='flex w-0 flex-1 items-center'>
                          <PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                          <span className='ml-2 w-0 flex-1 truncate'>coverletter_back_end_developer.pdf</span>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a href='download' className='font-medium text-indigo-600 hover:text-indigo-500'>
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </form>
        <form action='#' id='profile' method='POST'>
          <div className='shadow sm:overflow-hidden sm:rounded-md'>
            <div className='space-y-6 bg-white py-6 px-4 sm:p-6'>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Thông tin cá nhân</h3>
                <p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can recieve mail.</p>
              </div>

              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='full-name' className='block text-sm font-medium text-gray-700'>
                    Họ và tên
                  </label>
                  <input
                    type='text'
                    name='fullName'
                    id='full-name'
                    autoComplete='off'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label htmlFor='date-of-birth' className='block text-sm font-medium text-gray-700'>
                    Ngày sinh
                  </label>
                  <input
                    type='text'
                    name='dateOfBirth'
                    id='date-of-birth'
                    autoComplete='off'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
                <div className='col-span-6 sm:col-span-1'>
                  <label htmlFor='age' className='block text-sm font-medium text-gray-700'>
                    Tuổi
                  </label>
                  <input
                    type='text'
                    name='age'
                    id='age'
                    autoComplete='off'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Giới tính
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>Nam</option>
                    <option>Nữ</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='last-name' className='block text-sm font-medium text-gray-700'>
                    Dân tộc
                  </label>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                    Số điện thoại
                  </label>
                  <input
                    type='text'
                    name='email-address'
                    id='email-address'
                    autoComplete='email'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                    Địa chỉ Email
                  </label>
                  <input
                    type='text'
                    name='email-address'
                    id='email-address'
                    autoComplete='email'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Tỉnh/ Thành phố
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Quận/ Huyện
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Phường/ Xã
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='country' className='block text-sm font-medium text-gray-700'>
                    Khu phố/ Thôn ấp
                  </label>
                  <select
                    id='country'
                    name='country'
                    autoComplete='country-name'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className='col-span-6'>
                  <label htmlFor='street-address' className='block text-sm font-medium text-gray-700'>
                    Số nhà, tên đường
                  </label>
                  <input
                    type='text'
                    name='street-address'
                    id='street-address'
                    autoComplete='street-address'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                    Nghề nghiệp
                  </label>
                  <input
                    type='text'
                    name='email-address'
                    id='email-address'
                    autoComplete='email'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label htmlFor='email-address' className='block text-sm font-medium text-gray-700'>
                    Nơi làm việc
                  </label>
                  <input
                    type='text'
                    name='email-address'
                    id='email-address'
                    autoComplete='email'
                    className='mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  />
                </div>

                <div className='col-span-6'>
                  <label htmlFor='note' className='block text-sm font-medium text-gray-700'>
                    Ghi chú
                  </label>
                  <div className='mt-1'>
                    <textarea
                      id='note'
                      name='note'
                      rows={3}
                      className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      defaultValue={''}
                    />
                  </div>
                  <p className='mt-2 text-sm text-gray-500'>
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
              <button
                type='submit'
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Save
              </button>
            </div>
          </div>
        </form>

        <form action='#' method='POST'>
          <div className='shadow sm:overflow-hidden sm:rounded-md'>
            <div className='space-y-6 bg-white py-6 px-4 sm:p-6'>
              <div>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>Người thân</h3>
                <p className='mt-1 text-sm text-gray-500'>Use a permanent address where you can recieve mail.</p>
              </div>

              <div className='overflow-hidden bg-white shadow sm:rounded-md'>
                <ul className='divide-y divide-gray-200'>
                  {positions.map(position => (
                    <li key={position.id}>
                      <a href='a' className='block hover:bg-gray-50'>
                        <div className='px-4 py-4 sm:px-6'>
                          <div className='flex items-center justify-between'>
                            <p className='truncate text-sm font-medium text-indigo-600'>{position.title}</p>
                            <div className='ml-2 flex flex-shrink-0'>
                              <p className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                                {position.type}
                              </p>
                            </div>
                          </div>
                          <div className='mt-2 sm:flex sm:justify-between'>
                            <div className='sm:flex'>
                              <p className='flex items-center text-sm text-gray-500'>
                                <UsersIcon className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                                {position.department}
                              </p>
                              <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
                                <UsersIcon className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                                {position.location}
                              </p>
                            </div>
                            <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                              <CalendarIcon className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                              <p>
                                Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
              <button
                type='submit'
                className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
