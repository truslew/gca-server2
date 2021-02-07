import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Agreement } from './Agreement';

@Entity({ name: 'SponsorTypes' })
export class SponsorType {
    @PrimaryColumn()
    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    id: string;

    @Column()
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;

    @ManyToOne(() => Agreement, agreement => agreement.sponsorType)
    agreements: Agreement[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
