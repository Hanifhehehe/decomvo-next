import { getPage } from "@/app/actions/getPage";
import { CustomMDX } from "@/app/components/CustomMDX";

interface IParams {
    pageId?: string;
}

async function Page({params} : {params: IParams}) {
    const [title = "", id = ""] = (params.pageId || "").split("_");
    const decodedTitle = decodeURIComponent(title.replace(/%20/g, " "));

    const page = await getPage({id})
    const markdown = page.parent

    return (
        <div>
            <h1 className="font-bold text-2xl my-10 text-center">{decodedTitle}</h1>
            <CustomMDX source={markdown} />
        </div>
    )
}

export default Page