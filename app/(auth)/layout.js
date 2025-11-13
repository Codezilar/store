import { AuthStep } from '@/components/AuthStep'

const RootLayout = ({children}) => {
  return (
    <main className ="auth">
        <div className='sign_left'>
            <AuthStep />
        </div>
        {children}
    </main>
  )
}

export default RootLayout