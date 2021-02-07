import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Agreement } from './Agreement';

@Entity({ name: 'Receivers' })
export class Receiver {
    @PrimaryColumn()
    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    id: string;

    @Column()
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    name: string;

    @Column()
    @IsBoolean()
    whiteHouse: boolean = false;

    @ManyToOne(() => Agreement, agreement => agreement.sponsorType)
    agreements: Agreement[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
