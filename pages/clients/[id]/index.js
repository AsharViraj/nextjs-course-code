import { useRouter } from "next/router";

function ClientsProjectPage() {
    const router = useRouter();
    const loadProjectHandler = () => {
        // router.push('/clients/vir/projecta');
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'vir', clientprojectid: 'projectb'}
        })
    }

    return <div>
        <h1>The Projects Of a Given Client</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
}

export default ClientsProjectPage;