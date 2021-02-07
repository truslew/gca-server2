import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Sponsor } from './Sponsor';

@Entity({ name: 'Gifts' })
export class Gift {
    @PrimaryColumn()
    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    id: string;

    @Column()
    @IsInt()
    @IsNotEmpty()
    year: number = 0;

    @Column()
    @IsInt()
    @IsNotEmpty()
    gift: number = 0;

    @Column()
    @IsInt()
    @IsNotEmpty()
    lunch: number = 0;

    @Column()
    @IsInt()
    @IsNotEmpty()
    loss: number = 0;

    @Column()
    @IsInt()
    @IsNotEmpty()
    adjust: number = 0;

    @ManyToOne(() => Sponsor, sponsor => sponsor.gifts)
    sponsor: Sponsor;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
