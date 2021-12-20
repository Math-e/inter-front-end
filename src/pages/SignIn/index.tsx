import { Wrapper, Background, InputContainer, ButtonContainer } from './styles'
import background from '../../assets/images/background-login.jpg'
import Card from '../../components/Card'
import logoInter from '../../assets/images/Inter-orange.png'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from 'react'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { userSignIn } = useAuth()

    const handleToSignIn = async () => {
        const data = { email, password }

        const response = await userSignIn(data)

        if (response.id) {
            navigate('/dashboard')
            return
        }
        alert('Usuário ou senha inválidos')
    }



    return (
        <Wrapper>
            <Background image={background} />
            <Card width="403px">

                <img src={logoInter} width={172} height={61} alt="logo inter" />

                <InputContainer>
                    <Input placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="SENHA" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </InputContainer>

                <ButtonContainer>
                    <Button type="button" onClick={handleToSignIn} >Entrar</Button>
                    <p>Ainda não é cadastrado? <Link to="/signup">Cadastre-se agora.</Link></p>
                </ButtonContainer>

            </Card>
            SignIn
        </Wrapper>
    )
}

export default SignIn;
