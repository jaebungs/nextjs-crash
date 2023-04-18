import Link from "next/link"

async function fetchRepoContents(name) {
    // To demonstrate suspense boundary, add delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    let content
    try {
        const response = await fetch(`https://api.gitbuh.com/repos/jaebungs/${name}/contents`, {
            next: {
                revalidate: 60
            }
        })
        content = await response.json()
    } catch(error) {
        new Error('dir fetch failed')
    }

    return content
}


const RepoDirs = async (name) => {
    const contents = await fetchRepoContents(name)
    const dirs = contents?.filter(content => content.type === 'dir')

  return (
    <>
        <h3>Directories</h3>
            <ul>
                { contents && dirs?.map( dir => {
                    <li className="" key={ dir.path }>
                        <Link href={`/code/repos/${name}/${dir.path}`}></Link>
                    </li>
                })}
            </ul>

    </>
  )
}

export default RepoDirs