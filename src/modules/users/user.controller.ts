import { Request, Response } from "express"
import { userServices } from "./user.service"



const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.createUser(req.body)

        res.status(201).json({
            success: true,
            message: "User added successfully",
            data: result.rows[0],
        })
    } catch (err: any) {
        res.status(404).json({
            success: false,
            message: err.message,
        })
    }
}


const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getAllUsers()
        res.status(200).json({
            success: true,
            data: result.rows,
        })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}


const getSingleUser = async (req: Request, res: Response) => {
    const paramsEmail = req.params.email

    try {
        const result = await userServices.getSingleUser(paramsEmail as string)
        if (result.rows.length === 0) {
            res.status(404).json({
                status: false,
                message: "Not Found",
            })
        } else {
            res.status(200).json({
                status: true,
                data: result.rows[0],
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}



const updateUser = async (req: Request, res: Response) => {
    const paramsEmail = req.params.email
    try {
        const result = await userServices.updateUser(
            paramsEmail as string,
            req.body
        )
        if (result.rows.length === 0) {
            res.status(404).json({
                status: false,
                message: "Not Found",
            })
        } else {
            res.status(200).json({
                status: true,
                message: "User Updated Successfully",
                data: result.rows[0],
            })
        }
    } catch (err: any) {
        res.status(500).json({
            status: false,
            message: err.message,
        })
    }
}


const deleteUser = async (req: Request, res: Response) => {
    const paramsEmail = req.params.email

    try {
        const result = await userServices.deleteUser(paramsEmail as string)
        if (result.rowCount === 0) {
            res.status(404).json({
                status: false,
                message: "Not Found",
            })
        } else {
            res.status(200).json({
                status: true,
                message: "User Deleted Successfully",
            })
        }
    } catch (err: any) {
        res.status(500).json({
            status: false,
            message: err.message,
        })
    }
}



export const userControllers = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}