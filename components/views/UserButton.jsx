"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { useCurrentUser } from '@/hooks/use-current-user'
import { Loader2Icon, LogOut } from 'lucide-react'
import { useAuthActions } from '@convex-dev/auth/react'

const UserButton = () => {
    const { signOut } = useAuthActions();
    const {data, isLoading} = useCurrentUser();
    if (isLoading) {
    return <Loader2Icon className='w-5 h-5 animate-spin' />
    }

    if (!data) {
    return null
    }

    const { name, image } = data

    const avatarFallback = name.charAt(0).toUpperCase()

  return (
    <DropdownMenu modal={false} className='outline-none bg-black-1'>
      <DropdownMenuTrigger className='outline-none relative'>
        <Avatar className='h-8 w-8 hover:opacity-75 transition'>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className='bg-black-1 text-white font-semibold'>
                {avatarFallback}
            </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-60 bg-black-1 text-white border-none hover:bg-black-1' align='center' side='left'>
        <DropdownMenuItem onClick={() => signOut()} className="h-10 cursor-pointer">
        <LogOut className='mr-2 h-4 w-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserButton
