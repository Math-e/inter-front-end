import { useState, useEffect } from "react";
import { StatementItemImage, StatementItemInfo, StatementContainer, StatementItemContainer } from './styles'
import { format } from 'date-fns'
import { FiDollarSign } from 'react-icons/fi'
import { transactions } from "../../../services/resources/pix";

interface StatementItem {
  user: {
    firstName: string,
    lastName: string
  },
  value: number,
  type: 'paid' | 'received',
  updatedAt: Date
}

const StatementItem = ({ user, value, type, updatedAt }: StatementItem) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p>{type === 'paid' ? 'Pago a ' : 'Recebido de '} <strong>{user.firstName} {user.lastName}</strong></p>
        <p>{format(new Date(updatedAt), "dd/MM/yyyy ' às ' HH:mm:ss")}</p>
      </StatementItemInfo>
    </StatementItemContainer>

  )
}

const Statement = () => {

  const [statements, setStatements] = useState<StatementItem[]>([])

  const getAllTransactions = async () => {
    const { data } = await transactions()
    setStatements(data.transactions)
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <StatementContainer>
      {statements && statements.map(statement => <StatementItem {...statement} />)}
    </StatementContainer>

  )
}

export default Statement