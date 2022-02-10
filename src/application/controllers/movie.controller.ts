import { Controller, Get, Post, Body, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MovieService } from '../../domain/services/movie.service';
import { MovieCreateDTO, MovieGetDTO } from '../dtos/movie';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  @UseGuards(AuthGuard('basic'))
  async findAll(): Promise<MovieGetDTO[]> {
    const movies = await this.movieService.findAll();
    const dtos: MovieGetDTO[] = movies.map(movie => new MovieGetDTO(movie));

    return dtos;
  }

  @Post()
  @UseGuards(AuthGuard('basic'))
  async create(@Body() movieCreateDTO: MovieCreateDTO): Promise<MovieGetDTO> {
    const dto = new MovieCreateDTO(movieCreateDTO);
    const movie = await this.movieService.create(dto);
    return new MovieGetDTO(movie);
  }

  @Put()
  @UseGuards(AuthGuard('basic'))
  async update(@Body() movieCreateDTO: MovieCreateDTO): Promise<MovieGetDTO> {
    const dto = new MovieCreateDTO(movieCreateDTO);
    const movie = await this.movieService.update(dto);
    return new MovieGetDTO(movie);
  }
}
