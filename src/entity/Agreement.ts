import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min, MinLength } from 'class-validator';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Receiver } from './Receiver';
import { Sponsor } from './Sponsor';
import { SponsorType } from './SponsorType';

@Entity({ name: 'Agreements' })
export class Agreement {
    @PrimaryColumn()
    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    id: string;

    @Column()
    @IsDate()
    @IsOptional()
    from: Date;

    @Column()
    @IsDate()
    @IsOptional()
    to: Date;

    @Column()
    @IsInt()
    @IsNotEmpty()
    amount: number;

    @Column()
    @IsBoolean()
    @IsNotEmpty()
    yearly: boolean = false;

    @Column()
    @IsInt()
    @IsOptional()
    @Min(1)
    @Max(12)
    month: number;

    @Column()
    @IsBoolean()
    @IsNotEmpty()
    hasVariableAmount: boolean = false;

    @Column()
    @IsInt()
    @IsOptional()
    orderNo: number;

    @Column()
    @IsBoolean()
    @IsNotEmpty()
    sendInvoice: boolean = false;

    @Column()
    @IsBoolean()
    @IsNotEmpty()
    variableAmount: boolean = false;

    @ManyToOne(() => Sponsor, sponsor => sponsor.agreements)
    sponsor: Sponsor;

    @OneToMany(() => SponsorType, sponsorType => sponsorType.agreements)
    sponsorType: SponsorType;

    @OneToMany(() => Receiver, receiver => receiver.agreements)
    receiver: Receiver;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
