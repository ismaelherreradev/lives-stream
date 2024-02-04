import { Recommended } from './recommended';
import { Toggle } from './toggle'
import { Wrapper } from './wrapper'

import { getRecommended } from "@/lib/recommended-service";

export async function Sidebar() {
  const recommended = await getRecommended();
  
  return (
    <Wrapper>
      <Toggle />
      <Recommended data={recommended} />
    </Wrapper>
  )
}
