import { Controller, Get, Param } from '@nestjs/common';

@Controller('teams')
export class TeamsController {

    @Get(':id')
    async getProductById(@Param('id') id: string): Promise<String> {
        return null;
    }
}
