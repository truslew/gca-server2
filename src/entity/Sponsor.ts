import { IsBoolean, IsEmail, IsNotEmpty, IsNumberString, IsOptional, IsString, Length, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Agreement } from './Agreement';
import { Gift } from './Gift';

@Entity({ name: 'Sponsors' })
export class Sponsor {
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
    @IsString()
    @IsOptional()
    name1: string;

    @Column()
    @IsString()
    @IsOptional()
    name2: string;

    @Column()
    @IsString()
    @IsEmail()
    @IsOptional()
    email1: string;

    @Column()
    @IsString()
    @IsEmail()
    @IsOptional()
    email2: string;

    @Column()
    @IsNumberString()
    @Length(5, 5)
    @IsOptional()
    custNo: string;

    @Column()
    @IsBoolean()
    reminder: boolean = false;

    @Column('text')
    @IsString()
    @IsOptional()
    note: string;

    @Column()
    @IsNumberString()
    @Length(11, 11)
    @IsOptional()
    birthNumber: string;

    @Column()
    @IsBoolean()
    isOrganization: boolean = false;

    @Column()
    @IsNumberString()
    @Length(9, 9)
    @IsOptional()
    organizationNumber: string;

    @OneToMany(() => Agreement, agreement => agreement.sponsor)
    agreements: Agreement[];

    @OneToMany(() => Gift, agreement => agreement.sponsor)
    gifts: Gift[];

    @CreateDateColumn()
    createdAt: Date;
   
    @UpdateDateColumn()
    updatedAt: Date;
}
