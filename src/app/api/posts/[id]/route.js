import {
    NextResponse
} from "next/server";
import DBconnect from "@/utils/db";
import Post from "@/models/Post";

// GETTING SINGLE_POST_id


export const GET = async (req, {
    params
}) => {
    const {
        id
    } = params

    try {
        await DBconnect()
        const post = await Post.findById(id)
        if (!post) return new Response("Not Found", {
            status: 404
        })
        return new NextResponse(JSON.stringify(post), {
            status: 200
        })
    } catch (error) {
        return new NextResponse("DatabaseError",{status:500})
    }
}

// DELETING SINGLE_POST_id

export const DELETE = async (req, {
    params
}) => {
    const {
        id
    } = params

    try {
        await DBconnect()
        await Post.findByIdAndDelete(id);
                return new NextResponse("Post Has been Deleted ", {
            status: 200
        })
    } catch (error) {
        return new NextResponse("DatabaseError",{status:500})
    }
}

