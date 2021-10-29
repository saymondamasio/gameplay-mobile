import React from 'react'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

import { Container } from './styles'

type Props = {
  categorySelected: string
  setCategory: (categoryId: string) => void
}

export function CategorySelect({ categorySelected, setCategory }: Props) {
  return (
    <Container>
      {categories.map(category => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  )
}
