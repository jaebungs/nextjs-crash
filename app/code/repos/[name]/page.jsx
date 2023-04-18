import { Suspense } from "react"
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import Link from "next/link"
import ErrorBoundary from "@/app/components/ErrorBoundary"

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
        {/* <h2>{params.name}</h2> */}
        <Link href="/code/repos" className="btn btn-blue">
            Back to Repositiories
        </Link>
        <Suspense fallback={<div>Loading repos...</div>}>
            <Repo name={name} />
        </Suspense>

        <Suspense fallback={<div>Loading directories...</div>}>
            <ErrorBoundary>
                <RepoDirs name={name} />
            </ErrorBoundary>
        </Suspense>

    </div>
  )
}

export default RepoPage