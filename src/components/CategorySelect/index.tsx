import React from 'react'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

import { Container } from './styles'

type Props = {
  categorySelected: string
  hasCheckBox?: boolean
  setCategory: (categoryId: string) => void
}

export function CategorySelect({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}: Props) {
  return (
    <Container>
      {categories.map(category => (
        <Category
          key={category.id}
          icon={category.icon}
          title={category.title}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </Container>
  )
}
