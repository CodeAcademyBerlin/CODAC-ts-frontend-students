// ** React Imports
import { ReactNode } from 'react'
import BlankLayout from '../../../@core/layouts/BlankLayout'
import Error404 from '../../404'



const ErrorPage = () => <Error404 />

ErrorPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ErrorPage
