const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
        {/* <h2>{params.name}</h2> */}
        <h2>{name}</h2>
        <p>Repo Details</p>
    </div>
  )
}

export default RepoPage