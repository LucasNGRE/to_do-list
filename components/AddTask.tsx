import { Flex, Input, Button } from "@chakra-ui/react"
import { SmallAddIcon } from "@chakra-ui/icons"

import { AddTaskProps} from '@types'
import React from "react"


const AddTask = ({ task, setTask, handleCreateTask}: AddTaskProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      handleCreateTask()
    }
  };

  return (
    <Flex p="2rem" pl="2rem" pr="2rem" pb="1rem">
        <Input
            placeholder="Nouvelle tâche..."
            size='lg'
            onChange={(e) => setTask(e.target.value)}
            value={task}
            style={{ 'background': '#fff'}}
            onKeyDown={handleKeyPress}
        />
        <Button
            colorScheme="twitter"
            size={'lg'}
            onClick={() => handleCreateTask()}
        >
            <SmallAddIcon />
        </Button>
    </Flex>
  )
}

export default AddTask