type UserPageProps = {
  params: {
    username: string
  }
}

export default function UserPage(props: UserPageProps) {
  const { username } = props.params
  return (
    <div>
      <h1>{username}</h1>
    </div>
  )
}


