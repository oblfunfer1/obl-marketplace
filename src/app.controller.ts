import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
    getHome() {
        return {
              name: 'OBL MARKETPLACE',
                    message: 'Welcome to OBL MARKETPLACE API',
                          status: 'running',
                              };
                                }
                                }
                    